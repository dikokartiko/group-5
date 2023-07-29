# Purwadhika Final Project Repository

This is monorepo contain frontend project using ReactJS and backend project using ExpressJS.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For API, you can access it in [http://localhost:8000/api](http://localhost:8000/api).

The page will reload if you make edits.

### `npm run clean`

Remove `node_modules` folder from all project.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run serve`

Runs the app in the production mode.

### `npm run client`

Run command on client project.

### `npm run install:client`

Install dependency in client project. Use `npm install:client:dev` for dev dependencies.

### `npm run server`

Run command on server project.

### `npm run install:server`

Install dependency in server project. Use `npm install:server:dev` for dev dependencies.

• GitHub Pull Request via Command Line (CMD) / Terminal:\
1. Open VSC NOT as administrator (normal open)
2. Download + install scoop: iwr -useb get.scoop.sh | iex
3. Download GitHub CLI: scoop bucket add github-gh https://github.com/cli/scoop-gh.git
4. Install GitHub CLI: scoop install gh
5. Run GitHub CLI: gh auth login
6. Preparation by selecting the options:
    ? What account do you want to log into? GitHub.com
    ? What is your preferred protocol for Git operations? HTTPS
    ? Authenticate Git with your GitHub credentials? Yes
    ? How would you like to authenticate GitHub CLI? Login with a web browser

    ! First copy your one-time code: 61B3-A2EF
    Press Enter to open github.com in your browser... 
    ✓ Authentication complete.
    [Ignore, just note] - gh config set -h github.com git_protocol https
    ✓ Configured git protocol
    ✓ Logged in as dimasivonanggitama
7. Select default remote repository: gh repo set-default
    ? Which repository should be the default? dikokartiko/group-5
    ✓ Set dikokartiko/group-5 as the default repository for the current directory
8. Create Pull Request:
    gh pr create --base development --head test --title "Ini adalah judul" --body "Ini adalah deskripsi. ini aku coba pull request langsung dari terminal/command line" --reviewer dikokartiko

• Versioning Code:\
v(F).(FU).(C).(CU)\
F = Feature\
&emsp;F = 1 = Preparation\
&emsp;F = 2 = Landing Page\
&emsp;F = 3 = Routes\
&emsp;F = 4 = Controller\
&emsp;F = 5 = Migration\
&emsp;F = 6 = Model\
&emsp;F = 7 = Middleware\
&emsp;F = 8 = Login\
&emsp;F = 9 = Register\
FU = Feature Update (current version of feature)\
&emsp;v1.1 = Preparation\
&emsp;v2.1 = Routes\
&emsp;v3.1 = Controller\
&emsp;v5.1 = Model\
&emsp;v6.1 = Middleware\
C = Component\
&emsp;v1.(FU).1 = .env\
&emsp;v1.(FU).2 = .gitignore\
&emsp;v1.(FU).3 = index.js (outermost)\
&emsp;v1.(FU).4 = Config\
&emsp;v2.(FU).1 = index.js (routes folder)\
&emsp;v2.(FU).2 = Auth Routes\
&emsp;v3.(FU).1 = index.js (controllers folder)\
&emsp;v3.(FU).2 = authController\
&emsp;v4.(FU).1 = Create User Table\
&emsp;v5.(FU).1 = index.js (models folder)\
&emsp;v5.(FU).2 = User Model\
&emsp;v6.(FU).1 = index.js (middleware folder)\
&emsp;v6.(FU).2 = Auth: Input Verificator\
&emsp;v6.(FU).3 = Auth: DB Verificator\
&emsp;v6.(FU).4 = Auth: Token Verificator\
CU = Component Update\

• Alur sistem:\
index.js (paling luar) -> routes -> controllers -> models