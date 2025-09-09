## CLOSURE

Closure is concept of accessing values even after it's not in the main thread / execution.
In JavaScript Definition: 'Closure is a combination of function binds together with reference to it's surrounding state'

My Definition:
Let say we're going outing with our friends. There is always one friend who always remember all actions we done in previous outing we done so far. That friend is Closure here.

Example:

```jsx
function trip() {
  let activities = [];

  function addActivity(activity) {
    activities.push(activity);
    console.log(`${activity} is added to activity list`);
  }

  function showAllActivityDoneSoFar() {
    let activitiesString = "";
    for (let i = 0; i <= activities.length - 1; i++) {
      activitiesString = activitiesString + ", " + activities[i];
    }
    return activitiesString;
  }

  return {
    addActivity,
    showAllActivityDoneSoFar,
  };
}

const goaTrip = trip();
const karalaTrip = trip();

goaTrip.addActivity("Boating");
goaTrip.addActivity("Swimming");
goaTrip.addActivity("Site seeing");

karalaTrip.addActivity("Site seeing");
karalaTrip.addActivity("Swimming");
karalaTrip.addActivity("zoo");

console.log(
  `Activities done in goa trip: ${goaTrip.showAllActivityDoneSoFar()}`
);
console.log(
  `Activities done in karala trip: ${karalaTrip.showAllActivityDoneSoFar()}`
);
```
