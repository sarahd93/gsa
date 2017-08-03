/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2016 - 2017 Greenbone Networks GmbH
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

import {is_defined, for_each, pluralize_type} from './utils.js';

const types = {
  host: 'asset',
  hosts: 'asset',
  os: 'asset',
  cve: 'info',
  cves: 'info',
};

const check_type = type => {
  const ctype = types[type];
  if (is_defined(ctype)) {
    return ctype;
  }
  return type;
};

class Capabilities {

  constructor(element) {
    this._capabilities = new Set();
    this._has_caps = is_defined(element);

    for_each(element, command => {
      this._capabilities.add(command.name.toLowerCase());
    });
  }

  [Symbol.iterator]() {
    return this._capabilities[Symbol.iterator]();
  }

  get(name) {
    name = name.toLowerCase();
    let capability = this._capabilities.get(name);
    return is_defined(capability) ? capability : {};
  }

  areDefined() {
    return this._has_caps;
  }

  has(name) {
    return this._capabilities.has(name);
  }

  forEach(callback) {
    return this._capabilities.forEach(callback);
  }

  mayAccess(type) {
    return this.mayOp('get_' + pluralize_type(check_type(type)));
  }

  mayOp(value) {
    return this.has(value.toLowerCase()) || this.has('everything');
  }

  mayClone(type) {
    return this.mayOp('create_' + check_type(type));
  }

  mayEdit(type) {
    return this.mayOp('modify_' + check_type(type));
  }

  mayDelete(type) {
    return this.mayOp('delete_' + check_type(type));
  }

  mayCreate(type) {
    return this.mayOp('create_' + check_type(type));
  }

  get length() {
    return this._capabilities.size;
  }
}

export default Capabilities;

// vim: set ts=2 sw=2 tw=80:
