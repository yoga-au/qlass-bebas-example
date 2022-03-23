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

To reduce complexity, we can use nx console extension, search for `nx` in vscode extension menu, then add it

## Create react lib with nx console

Open nx console, click generate, make most barebone component with buildable flag, no css

## Import component to app

Check tsconfig.base.json first, look for paths to confirm absolute imports, then import to apps, restart the dev server, then make sure component are shown up

## Add another app, add another lib (try dependency graph and simulate error)

Create another app named unity, and another libs for hooks using nx console, add useConsoleLog hooks to hooks lib, import it to unity and unity use Title component aswell, show dependency graph and simulate error inside useConsoleLog prove that it doesn't affect dashboard

## Installing 3rd party packages in nx

To add any 3rd party package, run `yarn add -W [package-name]`, install goober, change one of the component style

## Using assets

## Environment variable

## Building apps
