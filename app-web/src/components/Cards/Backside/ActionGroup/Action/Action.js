/*
Copyright 2018 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../../UI/Link/Link';
import Aux from '../../../../../hoc/auxillary';

const Action = ({ icon, actionValue, actionName, link }) => {
  const innerAction = (
    <Aux>
      {icon}
      <span>{actionValue}</span>
    </Aux>
  );
  // if there is a link prop, wrap in a link tag
  const innerActionComponent = link !== '' ? <Link to={link}>{innerAction}</Link> : innerAction;

  return <li>{innerActionComponent}</li>;
};

Action.propTypes = {
  icon: PropTypes.node.isRequired,
  actionValue: PropTypes.string.isRequired,
  actionName: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Action.defaultProps = {
  link: '',
};

export default Action;
