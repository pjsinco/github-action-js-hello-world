const core = require('@actions/core');
const github = require('@actions/github');

try {
  // 'who-to-greet' input defined in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}`);
  const time = new Date().toTimeString();
  core.setOutput('time', time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (err) {
  core.setFailed(err.message);
}
