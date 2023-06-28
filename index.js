const dataset = [];
async function getData(url) {
  const reply = await fetch(url);
  const resolved = await Promise.resolve(reply);
  return resolved;
}
const promise = fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
)
  .then((res) => {
    const resp = res.json();
    return resp;
  })
  .then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      dataset.push(res.data[i]);
    }
  });
//dataset has the array of data
console.log(dataset);
//TODO: add d3 to project

//chart has title with id="title"

//chart has g element x-axis id="x-axis"
//chart has g element y-axis id="y-axis"

//x axis reflects date
//y axis reflects gdp value

//multiple labels on axes with class="tick"
//rect element for each data point, class="bar"

//each .bar has prop data-date and data-gdp with approp val

//.bar data-date match order of data

//.bar data-gdp match order of data

//.bar height represents correponding GDP

//data-date & corresponding .bar align with val on x-axis

//data-gdp & corresponding .bar align with val on y-axis

//show tooltip on mouse over an id="tooltip"

//tooltip have data-date prop corresponds to data-date of active area
