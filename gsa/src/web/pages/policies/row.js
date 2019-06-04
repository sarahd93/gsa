/* Copyright (C) 2017-2019 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React from 'react';

import _ from 'gmp/locale';

import IconDivider from 'web/components/layout/icondivider';

import ExportIcon from 'web/components/icon/exporticon';
import NewIcon from 'web/components/icon/newicon';

import TableRow from 'web/components/table/row';

import EntityNameTableData from 'web/entities/entitynametabledata';
import withEntitiesActions from 'web/entities/withEntitiesActions';

import CloneIcon from 'web/entity/icon/cloneicon';
import EditIcon from 'web/entity/icon/editicon';
import TrashIcon from 'web/entity/icon/trashicon';

import PropTypes from 'web/utils/proptypes';
import withCapabilities from 'web/utils/withCapabilities';
import compose from 'web/utils/compose';

const PoliciesActions = compose(
  withEntitiesActions,
  withCapabilities,
)(
  ({
    entity, //onScanConfigDeleteClick,
    onScanConfigDownloadClick,
    onScanConfigCloneClick,
    onScanConfigEditClick,
    onCreateAuditClick,
    capabilities,
  }) => (
    <IconDivider grow align={['center', 'center']}>
      {/*  <TrashIcon
        displayName={_('Scan Config')}
        name="config"
        entity={entity}
        onClick={onScanConfigDeleteClick}
      /> */}
      <EditIcon
        displayName={_('Scan Config')}
        name="config"
        entity={entity}
        onClick={onScanConfigEditClick}
      />
      <CloneIcon
        displayName={_('Scan Config')}
        name="config"
        entity={entity}
        title={_('Clone Scan Config')}
        value={entity}
        onClick={onScanConfigCloneClick}
      />
      <ExportIcon
        value={entity}
        title={_('Export Scan Config')}
        onClick={onScanConfigDownloadClick}
      />
      {capabilities.mayCreate('config') && (
        <NewIcon
          value={entity}
          title={_('Create Audit')}
          onClick={onCreateAuditClick}
        />
      )}
    </IconDivider>
  ),
);

PoliciesActions.propTypes = {
  entity: PropTypes.model.isRequired,
  onScanConfigCloneClick: PropTypes.func.isRequired,
  //onScanConfigDeleteClick: PropTypes.func.isRequired,
  onScanConfigDownloadClick: PropTypes.func.isRequired,
  onScanConfigEditClick: PropTypes.func.isRequired,
};

const PoliciesRow = ({
  actionsComponent: ActionsComponent = PoliciesActions,
  entity,
  links = true,
  onToggleDetailsClick,
  ...props
}) => (
  <TableRow>
    <EntityNameTableData
      entity={entity}
      link={links}
      type="scanconfig"
      displayName={_('Scan Config')}
      onToggleDetailsClick={onToggleDetailsClick}
    />
    <ActionsComponent {...props} entity={entity} />
  </TableRow>
);

PoliciesRow.propTypes = {
  actionsComponent: PropTypes.component,
  entity: PropTypes.model.isRequired,
  links: PropTypes.bool,
  onToggleDetailsClick: PropTypes.func.isRequired,
};

export default PoliciesRow;

// vim: set ts=2 sw=2 tw=80: