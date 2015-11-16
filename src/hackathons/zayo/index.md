---
layout: layout.hbs
---

# Hackathon - Zayo Day-1

## Question: What is the combined MRR for each Zayo customer?
console.log('Here 0')
## Menu

### Group By

<div style="border:1px grey solid; padding:5px;">
<button id="viz-zayo">Group By Name/ID</button>
</div>


## Viz

<div class="myviz" style="width:100%; height:500px; border: 1px black solid;">
Data is not loaded yet
</div>

console.log('Here 1')

{% script %}
// zayoData is a global variable
console.log('Here 2')

zayoData = 'not loaded yet'

console.log('Ready to load zayo data (services.json)')

$.get('src/hackathons/zayo/services.json')
 .success(function(data){
     console.log('data loaded', data)
     // Show in the myviz that the data is loaded
     $('.myviz').html('number of records load:' + data.length)
     zayoData = data
})

console.log('zayoData', zayoData)


function vizZayoCustomers() {

    // process zayoData

    console.log('function vizZayoCustomers()')
    var groups = _.groupBy(zayoData, function(d){
        return d['ID/Name']
    })

    // var dataArray = _.map(_.pairs(groups), function(p){
    //     return {name: p[0], count: p[1].length}
    // })
    // console.log('dataArray', dataArray)

    // define a template string
    var tplString = '<g transform="translate(0 ${d.y})"> \
                    <rect   \
                         width="${d.width}" \
                         height="20"    \
                         style="fill:${d.color};    \
                                stroke-width:3; \
                                stroke:rgb(0,0,0)" />   \
                    </g>'

    // compile the string to get a template function
    var template = _.template(tplString)

    function computeX(d, i) {
        return 0
    }
    function computeWidth(d, i) {
        return d['count'] / 5
    }
    function computeY(d, i) {
        return i * 20
    }
    function computeColor(d, i) {
        return 'red'
    }

    var viz = _.map(dataArray, function(d, i){
                return {
                    x: computeX(d, i),
                    y: computeY(d, i),
                    width: computeWidth(d, i),
                    color: computeColor(d, i)
                }
             })
    console.log('viz', viz)

    var result = _.map(viz, function(d){
             // invoke the compiled template function on each viz data
             return template({d: d})
         })
    console.log('result', result)

    $('.myviz').html('<svg width="100%" height="100%">' + result + '</svg>')
}

$('button#viz-zayo').click(vizZayoCustomers)

{% endscript %}


