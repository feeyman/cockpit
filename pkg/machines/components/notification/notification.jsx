/*
 * This file is part of Cockpit.
 *
 * Copyright (C) 2017 Red Hat, Inc.
 *
 * Cockpit is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Cockpit is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import PropTypes from 'prop-types';

import './notification.css';

export const NotificationMessage = ({ description, message }) => {
    const messageNode = message ? (
        <strong>
            {`${message} `}
        </strong>
    ) : null;

    return (
        <div className="notification-message">
            {messageNode}
            {description}
        </div>
    );
};

NotificationMessage.propTypes = {
    description: PropTypes.string,
    message: PropTypes.string,
};