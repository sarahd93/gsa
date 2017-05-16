/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2017 Greenbone Networks GmbH
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

import {withDialog} from '../dialog/dialog.js';

import _ from '../../locale.js';

import Layout from '../layout.js';
import PropTypes from '../proptypes.js';

import FileField from '../form/filefield.js';
import FormGroup from '../form/formgroup.js';

const ImportDialog = ({
    onValueChange,
  }) => {
  return (
    <Layout flex="column">
      <FormGroup
        title={_('Import XML Port List')}i
        titleSize="4">
        <FileField
          name="xml_file"
          onChange={onValueChange}/>
      </FormGroup>
    </Layout>
  );
};

ImportDialog.propTypes = {
  onValueChange: PropTypes.func,
};


export default withDialog(ImportDialog, {
  title: _('Import Port List'),
  footer: _('Import'),
});