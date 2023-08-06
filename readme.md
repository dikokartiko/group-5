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

• Installed Dependency on Front End (FE) / Client-side:
1. npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
2. npm install formik yup
3. npm install react-router-dom
4. npm install react-icons --save

• Versioning Code:\
(WA)-(G)-v(CU)\
WA = Working Area\
&emsp;WA = FE = Front End (Client Side)\
&emsp;WA = BE = Back End (Server Side)\
G = Group\
CU = Component Update version\

&emsp;(WA) = FE\
Components:\
&emsp;&emsp;FE-IPOD = Image: Pos Device\
&emsp;&emsp;FE-PREP = Preparation (Current version: v1)\
&emsp;&emsp;FE-COMP = Components\
&emsp;&emsp;&emsp;FE-COMP-1 = Regular Modal\
&emsp;&emsp;&emsp;FE-COMP-2 = Input With Error\
&emsp;&emsp;&emsp;FE-COMP-3 = Input Password\
&emsp;&emsp;&emsp;FE-COMP-4 = Form Card\
&emsp;&emsp;&emsp;FE-COMP-5 = Blank Page\

Section:\
&emsp;&emsp;FE-CART = Cart\
&emsp;&emsp;FE-DASH = Dashboard\
&emsp;&emsp;FE-HEAD = Header\
&emsp;&emsp;FE-SIDE = Sidebar\

Pages:\
&emsp;&emsp;FE-FOFO = Forgot Password Form\
&emsp;&emsp;FE-FORG = Forgot Password Page\
&emsp;&emsp;FE-HOME = Landing Page of POS/Cashier app (Intro)\
&emsp;&emsp;FE-LOGI = Login Form\
&emsp;&emsp;FE-MAIN = Main page of POS/Cashier app\
&emsp;&emsp;FE-REGU = Reset Password Page for Guest (pre-User)\
&emsp;&emsp;FE-REUS = Reset Password Page for User (Admin & Cashier)\
&emsp;&emsp;FE-SUCC = Success Page\
&emsp;&emsp;FE-VERI = Verification