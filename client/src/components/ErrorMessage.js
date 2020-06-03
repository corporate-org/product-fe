/* eslint-disable no-template-curly-in-string */
import React from 'react';

export function ErrorMessage(props) {
  return (
    <div className={props.message ? "error-message" : "hidden-error-message"}>
      This <span className="bold">sample-app</span> is intended to be used with <span className="bold">sample-service</span>. To add tasks to your task list:
      <ul>
        <li>Add a sample-service module to your app on Humanitec.</li>

        <li>In your sample-service configuration, add a <span className="bold">database</span>.</li>

        <li>In <span className="bold">Variables</span>, define an environment variable for your database connection with a key <span className="highlight">CONNECTION_STRING</span> and value: <span className="highlight">{'${externals.postgres.host};${externals.postgres.name};${externals.postgres.username};${externals.postgres.password}'}</span></li>

        <li>Deploy your changes and reload this page</li>
      </ul>

    </div>
  );
}
