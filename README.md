# 📝 NoteSpace

A minimal Note taking app with out-of-the-box markdown support using Electron, React, Typescript, TailwindCSS, Jotai and MDX Editor.<br>
I built this project for learning purposes.<br>
This Project is inspired from [gionathas](https://github.com/gionathas/NoteMark).

## 📦 Technologies

- `Electron` - [Link](https://www.electronjs.org/)
- `React.js` - [Link](https://react.dev/)
- `TypeScript` - [Link](https://www.typescriptlang.org/)
- `TailwindCSS` - [Link](https://tailwindcss.com/)
- `Jotai` - [Link](https://jotai.org/)
- `MDX Editor` - [Link](https://mdxeditor.dev/)

## 🌌 Features

Here's what you can do with NoteSpace:

- **Create Note:** You have a Create note btn that will create a new note. Simply give a title to your note and click create.
- **MarkDown:** I have implemented an MDX Editor that allows you to write your notes in a markdown format.
- **Auto Save:** As you keep writing your notes, they will be auto-saved so you don't have to worry about losing your work.

## 👨‍🍳 The Process

I started by creating the electron project by following the official documentation from [electronjs.org](https://www.electronjs.org/docs/latest/).

Then I started configuring the project by setting up Prettier, ESLint, tsconfig, and other necessary tools, and established the project structure by creating appropriate folders.

Next, I satrted working on creating the UI of the application (Front-end). I used ReactJS for the front-end.

For styling I installed TailwindCSS library from its Official website and go through the [configuration](https://tailwindcss.com/docs/guides/vite) process.

To write notes in markdown format I added MDX Editor library and configured it by following the official documentation.

To keep track the state of the application I installed Jotai state management library and read through the documentaion to understand it. This is my first time using Jotai.

Now, The best part to implementation which is File system integration for this I installed fs-extra npm library. From here I stared creating the CRUD ( Create - Read - Update - Delete ) functionality.

Along the way, while building everything, I took notes on what I've learned so I don't miss out on it. I also documented the behind-the-scenes processes every time a feature was added. And commit it to github.

This way, I understood what I've built. The funny thing is, as soon as I started to document what happened behind the scenes and the features I've added, it made me realize that we fully understand something once we've actually taken a step back, thought about it, and documented what we've done. I think this is a good practice to follow when learning something new.

## 📚 What I Learned

During this project, I've picked up important skills and a better understanding of complex ideas, which improved my logical thinking.

**_ElectronJS_**

- Through this project, I gained a solid understanding of ElectronJS and how it works behind the scenes. I learned how to create a basic ElectronJS application, how to manage the main and renderer processes, and how to use IPC (InterProcess Communication) to communicate between them.

**_typescript_**

- I gained a deeper understanding of TypeScript and how to use it effectively in my projects. I also learned how to use the null and undefined types to express that a variable can be explicitly null or undefined.

**_fs-extra_ library:**

- I gained experience using the fs-extra library to interact with the local file system and manipulate files and directories.

**_Jotai_ State Management System:**

- With Jotai, I learned how to manage state in a simple and efficient way using atoms and hooks. The `atom` function allows me to define a piece of state, while the `useAtom` hook enables me to access and update that state in my components.

**Discovering _MDX Editor_:**

- I found out about MDX Editor, which lets me write my notes into markdown format. This was a new and exciting tool for me.

## 📈 Overall Growth:

Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a tool. It was about solving problems, learning new things, and improving my skills for future work.

## 💻 Running the Project locally:

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. A new windows will pop up and you are ready to start.

If you want to build the project and use it locally without the needs of codes

5. Run `npm run build:win` or `yarn build:win` This will build the application, then goto `dist` folder and you will find .exe file.
6. Copy all the files from dist folder to your own folder and install the application.
