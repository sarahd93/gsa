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

import PropTypes from 'web/utils/proptypes';

import SaveDialog from 'web/components/dialog/savedialog';

import FormGroup from 'web/components/form/formgroup';
import TextField from 'web/components/form/textfield';

import Layout from 'web/components/layout/layout';

import {
  FULL_AND_FAST_SCAN_CONFIG_ID,
  EMPTY_SCAN_CONFIG_ID,
} from 'gmp/models/scanconfig';

const Dialog = ({
  base = EMPTY_SCAN_CONFIG_ID,
  comment = '',
  name = _('Unnamed'),
  scanner_id,
  scanners = [],
  title = _('New Policy'),
  onClose,
  onSave,
}) => {
  const data = {
    base,
    comment,
    name,
    scanner_id,
    usage_type: 'policy',
  };

  return (
    <SaveDialog
      title={title}
      onClose={onClose}
      onSave={onSave}
      defaultValues={data}
    >
      {({values: state, onValueChange}) => {
        return (
          <Layout flex="column">
            <FormGroup title={_('Name')}>
              <TextField
                name="name"
                grow="1"
                value={state.name}
                size="30"
                onChange={onValueChange}
              />
            </FormGroup>

            <FormGroup title={_('Comment')}>
              <TextField
                name="comment"
                value={state.comment}
                grow="1"
                size="30"
                onChange={onValueChange}
              />
            </FormGroup>
          </Layout>
        );
      }}
    </SaveDialog>
  );
};

Dialog.propTypes = {
  base: PropTypes.oneOf([
    FULL_AND_FAST_SCAN_CONFIG_ID,
    EMPTY_SCAN_CONFIG_ID,
    '0',
  ]),
  comment: PropTypes.string,
  name: PropTypes.string,
  scanner_id: PropTypes.id,
  scanners: PropTypes.array,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Dialog;

// vim: set ts=2 sw=2 tw=80: