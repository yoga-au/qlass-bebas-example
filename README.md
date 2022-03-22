# Live Practice Note

## Initiate workspaces

Run `yarn create nx-workspace --package-manager=yarn`, named it with `qlue demo`

## Install react plugin for nx

Run `yarn nx list` first, show available plugin, between oficial and community.<br>
Run `yarn add -DW @nrwl/react` to add nx react plugin

## Create react app with nx cli

Run `yarn nx generate @nrwl/react:application --dry-run` use dry run first to check output is corret or not then remove dry run flag

## Run local development server

Check `project.json` inside app folder, look for serve script then run `yarn nx run dashboard:serve`

## Add nx console extension

## Create react lib with nx console

## Import component to app

## Add another app, add another lib (try dependency graph)

## Installing 3rd party packages in nx

## Using assets

## Environment variable

## Building apps
