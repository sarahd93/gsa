/* Copyright (C) 2020 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import {useCallback} from 'react';

import date from 'gmp/models/date';

import Event from 'gmp/models/event';

import {ALL_IANA_ASSIGNED_TCP} from 'gmp/models/portlist';
import {FULL_AND_FAST_SCAN_CONFIG_ID} from 'gmp/models/scanconfig';
import {OPENVAS_DEFAULT_SCANNER_ID} from 'gmp/models/scanner';

import {useCreateAlert} from 'web/graphql/alerts';
import {useCreateSchedule} from 'web/graphql/schedules';
import {useCreateTarget} from 'web/graphql/targets';
import {useCreateTask, useStartTask, useModifyTask} from 'web/graphql/tasks';

import {
  INCLUDE_MESSAGE_DEFAULT,
  DEFAULT_NOTICE_REPORT_FORMAT,
} from 'web/pages/alerts/dialog';

import {hasValue} from 'gmp/utils/identity';

export const useRunQuickFirstScan = () => {
  const [createTarget] = useCreateTarget();
  const [createTask] = useCreateTask();
  const [startTask] = useStartTask();

  const runQuickFirstScan = useCallback(
    (data, targetDate = date()) => {
      const creationDate = targetDate.toISOString(); // Changed this, because we need seconds. Otherwise if the user runs task wizard twice in the same minute, there will be a name conflict.

      const {hosts} = data;
      const targetInputObject = {
        name: `Target for immediate scan of IP ${hosts} - ${creationDate}`,
        hosts,
        portListId: ALL_IANA_ASSIGNED_TCP,
      };

      return createTarget(targetInputObject).then(resp => {
        const targetId = resp?.data?.createTarget?.id;

        const taskInputObject = {
          name: `Immediate scan of IP ${hosts}`,
          configId: FULL_AND_FAST_SCAN_CONFIG_ID,
          targetId,
          scannerId: OPENVAS_DEFAULT_SCANNER_ID,
        };

        return createTask(taskInputObject).then(response => {
          const taskId = response?.data?.createTask?.id;

          return startTask(taskId);
        });
      });
    },
    [createTarget, createTask, startTask],
  );

  return [runQuickFirstScan];
};

export const useRunModifyTask = () => {
  const [createAlert] = useCreateAlert();
  const [createSchedule] = useCreateSchedule();
  const [modifyTask] = useModifyTask();

  const runModifyTask = useCallback(
    (
      {alertEmail, startDate, startTimezone, reschedule, tasks},
      targetDate = date(),
    ) => {
      const [task] = tasks;
      const {name, id: taskId, alerts} = task;

      const creationDate = targetDate.toISOString();

      const event = Event.fromData({startDate}, startTimezone);
      let schedulePromise;

      if (reschedule) {
        const createScheduleInput = {
          name: `Schedule for ${name} - ${creationDate}`,
          icalendar: event.toIcalString(),
          timezone: startTimezone,
          comment: 'Automatically generated by wizard',
        };
        schedulePromise = createSchedule(createScheduleInput);
      } else {
        schedulePromise = Promise.resolve();
      }

      return schedulePromise.then(resp => {
        // Should be undefined if no schedule is created
        const scheduleId = resp?.data?.createSchedule?.id;

        let alertPromise;

        if (hasValue(alertEmail) && alertEmail.length > 0) {
          const createAlertInput = {
            name: `Email Alert for ${name} - ${creationDate}`,
            comment: 'Automatically generated by wizard',
            event: 'TASK_RUN_STATUS_CHANGED',
            eventData: {
              status: 'DONE',
            },
            method: 'EMAIL',
            methodData: {
              to_address: alertEmail,
              from_address: alertEmail,
              message: INCLUDE_MESSAGE_DEFAULT,
              notice: 0,
              notice_report_format: DEFAULT_NOTICE_REPORT_FORMAT,
            },
            condition: 'ALWAYS',
          };

          alertPromise = createAlert(createAlertInput);
        } else {
          alertPromise = Promise.resolve();
        }

        return alertPromise.then(alertId => {
          const taskAlerts = [];

          if (hasValue(alertId)) {
            // Should be undefined if no alert is created

            if (hasValue(alerts)) {
              alerts.forEach(alert => taskAlerts.push(alert.id));
            }

            taskAlerts.push(alertId);
          }
          const modifyTaskInput = {
            id: taskId,
            scheduleId: hasValue(scheduleId) ? scheduleId : null,
            alertIds: hasValue(alertId) ? taskAlerts : null,
          };

          return modifyTask(modifyTaskInput);
        });
      });
    },
    [createAlert, createSchedule, modifyTask],
  );

  return [runModifyTask];
};
