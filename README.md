<div align="center">
  <img src="https://i.imgur.com/4NH8ufA.png"><br>
  <b><a href="https://github.com/SwitchbladeBot/switchblade">Switchblade</a>'s official website, made with <a href="https://nuxtjs.org/">Nuxt.js</a> and <a href="https://vuejs.org/">Vue.js</a>.</b><br>
  <br>
  <p>
    <br>
    <a href="https://support.switchblade.xyz/"><img src="https://img.shields.io/badge/dynamic/json.svg?style=flat-square&label=chat%20on%20Discord&colorB=7289DA&url=https%3A%2F%2Fdiscordapp.com%2Fapi%2Fservers%2F445203868624748555%2Fembed.json&query=%24.members.length&suffix=%20online" alt="Discord Server"/></a>
    <a href="https://travis-ci.org/SwitchbladeBot/website"><img src="https://img.shields.io/travis/SwitchbladeBot/website.svg?style=flat-square"/></a>
    <a href="https://david-dm.org/SwitchbladeBot/website"><img src="https://david-dm.org/SwitchbladeBot/website/status.svg?style=flat-square"/></a>
    <a href="https://david-dm.org/SwitchbladeBot/website?type=dev"><img src="https://david-dm.org/SwitchbladeBot/website/dev-status.svg?style=flat-square"/></a>
  </p>
</div>

## Setting up a development environment
**0. Fork the repository** (You don't have to do this if you're part of our organization)

**1. Clone your fork**
```bash
git clone https://github.com/<your github username>/website
cd website
```

**2. Install all the dependencies with NPM**
```bash
npm install
```

**3. Build and serve!**
```
npm run start
```

*But...* You also need to run an API server. It's easy! Just do the following:

**4. Clone your fork of the website ([which you can find here](https://github.com/SwitchbladeBot/website))**
```bash
git clone https://github.com/<your github username>/bladey-api
```

**5. Install Dependencies**
```bash
npm install
``` 

**6. Run**
```
npm run dev
```
After this, just start the website instance and you're done!
