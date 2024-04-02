import{u as a,j as i}from"./index-KZ_aprDi.js";const h={title:"Deploy your game using Slot",description:"undefined"};function t(s){const e={a:"a",code:"code",div:"div",figure:"figure",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",span:"span",...a(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.header,{children:i.jsxs(e.h1,{id:"deploy-your-game-using-slot",children:["Deploy your game using Slot",i.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-your-game-using-slot",children:i.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,i.jsx(e.p,{children:"Welcome to this tutorial where we'll guide you through deploying a project using the Slot."}),`
`,i.jsx(e.hr,{}),`
`,i.jsxs(e.p,{children:["Before we start, make sure you are using the latest dojo version. Run ",i.jsx(e.code,{children:"dojoup"})," to have the latest version installed."]}),`
`,i.jsx(e.p,{children:"Now, let's create a new folder and initialize it with sozo."}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsxs(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"mkdir"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" dojo-starter "}),i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"&& "}),i.jsx(e.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:"cd"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" dojo-starter"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" init"})]})]})})}),`
`,i.jsx(e.p,{children:"First, we need to set up our configuration, starting by authenticating with Cartridge. To do this, run the following command, which will then prompt a new screen where you will need to go through the authentication process."}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsxs(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"slot"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" auth login"})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#768390","--shiki-light":"#6A737D"},children:"# Slot Auth debug (if old auth credentials):"})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"rm"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" ~/Library/Application"}),i.jsx(e.span,{style:{"--shiki-dark":"#F47067","--shiki-light":"#005CC5"},children:"\\ "}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:"Support/slot/credentials.json"})]})]})})}),`
`,i.jsxs(e.p,{children:["Once successful, you can create a new deployment with a unique ",i.jsx(e.code,{children:"DEPLOYMENT_NAME"}),". To do this, run the following command:"]}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"slot"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" deployments create DEPLOYMENT_NAME katana"})]})})})}),`
`,i.jsxs(e.p,{children:["After that, you should receive the RPC endpoint for the katana slot. Now, you can use that and update your ",i.jsx(e.code,{children:"Scarb.toml"})," file with the new RPC endpoint as follows:"]}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"toml","data-theme":"github-dark-dimmed github-light",children:i.jsxs(e.code,{"data-language":"toml","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"["}),i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"tool"}),i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"."}),i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"dojo"}),i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"."}),i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"env"}),i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"]"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"rpc_url = "}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:'"YOUR_NEW_RPC_URL"'})]})]})})}),`
`,i.jsx(e.p,{children:"Now, you can stream katana in a new terminal. Open a new terminal and run the following command:"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"slot"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" deployments logs DEPLOYMENT_NAME katana -f"})]})})})}),`
`,i.jsxs(e.p,{children:["Then, copy the account address and the private key from the first account into the ",i.jsx(e.code,{children:"Scarb.toml"})," file and replace the existing ones as follows:"]}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"toml","data-theme":"github-dark-dimmed github-light",children:i.jsxs(e.code,{"data-language":"toml","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"account_address = "}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:'"YOUR_NEW_ACCOUNT_ADDRESS"'})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#ADBAC7","--shiki-light":"#24292E"},children:"private_key = "}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:'"YOUR_NEW_PRIVATE_KEY"'})]})]})})}),`
`,i.jsx(e.p,{children:"Note: For each new Katana slot, a different account seed is used, making all the accounts unique!"}),`
`,i.jsx(e.hr,{}),`
`,i.jsx(e.p,{children:"Once finished with the new configurations, we are ready to build and migrate the project. To build the project, run the following command:"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" build"})]})})})}),`
`,i.jsx(e.p,{children:"Now, let's migrate the project to our new katana slot:"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" migrate --name YOUR_PROJECT_NAME"})]})})})}),`
`,i.jsxs(e.p,{children:["If the migrations have been successful, you will receive the ",i.jsx(e.code,{children:"WORLD_ADDRESS"}),", which then you can use to interact with your world."]}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsxs(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:[i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"🎉"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" Successfully migrated World at address WORLD_ADDRESS"})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"✨"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" Updating manifest.json..."})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"✨"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" Done."})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "})]})})}),`
`,i.jsx(e.p,{children:"Congratulations! You have successfully deployed your project with a Katana slot."}),`
`,i.jsxs(e.h2,{id:"torii",children:["Torii",i.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#torii",children:i.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,i.jsx(e.p,{children:"To initiate a Torri indexer slot, execute the following command:"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"slot"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" deployments create DEPLOYMENT_NAME torii --world YOUR_WORLD_ADDRESS --rpc YOUR_NEW_RPC_URL --start-block "}),i.jsx(e.span,{style:{"--shiki-dark":"#6CB6FF","--shiki-light":"#005CC5"},children:"1"})]})})})}),`
`,i.jsx(e.p,{children:"Once deployment is successful, you should receive the endpoints for GraphQL and gRPC."}),`
`,i.jsx(e.p,{children:"If you wish to stream the logs, you can run the following command in a new terminal:"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{tabIndex:"0","data-language":"sh","data-theme":"github-dark-dimmed github-light",children:i.jsx(e.code,{"data-language":"sh","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"slot"}),i.jsx(e.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" deployments logs DEPLOYMENT_NAME torii -f"})]})})})})]})}function n(s={}){const{wrapper:e}={...a(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(t,{...s})}):t(s)}export{n as default,h as frontmatter};