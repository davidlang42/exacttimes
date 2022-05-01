# ExactTimes
An add-on to see exact email times in Gmail.

Gmail shows you when an email was sent to the nearest minute, but sometimes you need to know the exact second it was sent, for example when automated dioagnostic emails are sent. This add-on allows you to see the exact time for each message in the current thread.

The add-on is hosted directly on Google Apps Script, free for anyone to use: TBA

But by all means, [buy me a coffee](https://ko-fi.com/davidlang42).

## Set up local repo
* Clone git repo: `git clone https://github.com/davidlang42/exacttimes.git`
* Install [clasp](https://developers.google.com/apps-script/guides/clasp): `npm install @google/clasp -g`
* Login to clasp: `clasp login`
* Enter app directory: `cd app`
* Connect apps script project: `clasp clone [scriptId]`

## Deploying changes
### Use bash script
* Run from the root of the repo: `./deploy.sh`
  * Warning: This will overwrite any changes made directly on google apps scripts, but they will still exist in a reverted commit labelled 'possible lost changes'
### Execute manually
* Enter app directory: `cd app`
* Pull changes to local git repo: `git pull`
* Push changes to apps scripts: `clasp push`
  * Warning: This will overwrite any changes made directly on google apps scripts
* Find existing deployment: `clasp deployments`
  * Returns deployment id: `- AKfycbwbobNmATNiVksctUb1JM5vOImT7Q4KFnwnV0pGuEhK3wlFU2eIJLauxpj7IOfVHIja4A @1 - MVP`
* Create version & update existing deployment: `clasp deploy -i [deploymentId] -d "[description]"`
