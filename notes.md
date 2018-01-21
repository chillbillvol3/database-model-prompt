https://github.com/flatiron/prompt appropriate prompt library for the project.

```
bill@bill-ThinkPad-T430 ~/Desktop/mobProject $ git init
Initialized empty Git repository in /home/bill/Desktop/mobProject/.git/
bill@bill-ThinkPad-T430 ~/Desktop/mobProject $ git remote add origin https://github.com/chillbillvol3/database-model-prompt.git
```

Here the origin keyword is going to be associated to this project (where it is stored at github) and when changes are pushed through the origin keyword will need to be present. The way the web address is associated to the origin keyword is through the "git remote add" (line 5)

npm init initials a new node package in that folder, so that dependencies and other packages can be used.

package.json is a universal way for different programming languages to communicate with each other and put their variables in ways that other languages can process.

Scissors button (source control button on left margin), has buttons on each page that has been modified. The button takes a screenshot of the code, and then a commit message needs to be added to show what updates or changes have been made. When the commits need to be saved:
```
bill@bill-ThinkPad-T430 ~/Desktop/mobProject $ git push origin master
```
git checkout  (allows for you to switch branches)
git checkout -b (allows you to create a new branch and immmediately switch into it)

prompt package was installed via:
```
npm install prompt --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN mob-project@1.0.0 No repository field.

+ prompt@1.0.0
added 33 packages in 2.297s
```

(--save makes it to where when the project is shared the dependencies are sent with it)

This is the code that converted the results from the prompt  into a JSON string:
```
const fieldString = JSON.stringify(result, null, 2);
```

This is the code that wrote the string to the hard drive:

```
fs.writeFile('./config.json', fieldString, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('done.');
    })
```
The function is passed in as a 'callback'. When node has to step outside of itself to do thing like write to the hard drive the callback is used to handle exceptions, and to give back the information asked for (i.e. fs.readFile(err, information)) 

An three tilde's will signify a code block in your markdown page.
```
does it inline
```
