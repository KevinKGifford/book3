function analyze(){

  //
  // Getting To Know the Data
  //

  heading('Examples')

  ask('how many measurements were included in this dataset?', example1)

  ask('how many samples does each measurement contain?', example2)

  ask('at the 10-th measurement, what are valid sample values (> 0)?', example3)
  // a sample value is valid if it is greater than zero

  heading('Measurements and Samples')

  ask('how many unique non-zero, non-negative sample values in this dataset? what are they?', func1)

  ask('what is the average time (seconds) between two measurements?', func2)

  ask('at 09:57:18, how many samples in this measurement have the value 7?', func3)

  ask('which measurement has the most number of samples with the value 3?', func4)

  ask('how many measurements have no sample value greater than zero?', func5)

  ask('which valid (i.e., greater than zero) sample value is the most common?', func6)

  heading('Mapping')

  ask('when was the boat furthest away from NYC (40.7127 N, 74.0059 W)? what was the distance?', func7)
  // use Leaflet to draw a line between NYC and this "furtherest away" location

  ask('what was the path of the boat?', func8)
  // use Leaflet to draw a line between every two locations

  ask('where were the most common sample value measured?', func9)
  // say, your answer to Question Six is 13, draw a marker for each measurement that has
  // at least one sample whose value is 13

  ask('how does the density of valid sample values change across the geographical area?', func10)
  // use the brightness to indicate high number of valid sample values each
  // for each measurement, draw a marker,
  // use the brightness to represent the number of valid samples
  // the brighter a spot, the higher the number
  // for those measurements without a valid sample, draw nothing

  heading('Science')

  ask('what is the distribution of fish?', func11)

  ask('what is the distribution of  are schools of zooplankton?', func12)


  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  })
  toggleSourecode()
}

function example1() {
  // How many measurements were included in this dataset?
  return items.length
}

function example2() {
  // How many samples does each measurement contain?
  return items[0].Samples.length
}

function example3() {
  // At the 10-th measurement, what are valid sample values (> 0)?
  // A sample value is valid if it is greater than zero
  return _.filter(items[9].Samples, function(d) {
    return d > 0
  }).join(', ')
}

function func1() {
  // How many unique non-zero, non-negative sample values in this dataset? What are they?
  var validSamples = []
  var samples = _.map(items, function(d) {
    return _.map(d['Samples'], function(f) {
      if (f > 0) { validSamples[validSamples.length] = f }
    })
  })
  
  var numberUniqueSamples = 'There are ' + _.uniq(validSamples).length + ' unique non-zero, non-negative sample values in the dataset; '
  var validSampleValues = ' The valid sample values are: ' + _.uniq(validSamples).join(', ')

  return numberUniqueSamples + validSampleValues

}

function func2() {
  // What is the average time (seconds) between two measurements?
  var timestamps = []
  var findTimestamps = _.map(items, function(d) {
    timestamps[timestamps.length] = d['Ping_time']
  })
  // console.log('timestamps', timestamps.join(', '))
  var time1 = moment
}

function func3() {
  // At 09:57:18, how many samples in this measurement have the value 7?
  var timestamp = _.filter(items, function(d) {
    return d['Ping_time'] == "09:57:18"
  })
  var sampleValue7 = _.filter(timestamp[0].Samples, function(d) {
    return d == "7.000000"
  })
  return sampleValue7.length
}

function func4() {
  // Which measurement has the most number of samples with the value 3?
  var countArray = []
  var sampleItems = _.map(items, function(d) {
    count = 0
    var sampleNumber3 = _.map(d['Samples'], function(f) {
      if (f == "3.000000") { count++ }
    })
    countArray[countArray.length] = count
  })
  var max3s = _.max(countArray)
  var index = _.findIndex(countArray, function(d) {
    return d == max3s
  })
  var string = 'Measurement #314 (starting from 1) at Ping_time: ' + items[index].Ping_time + ' has ' + max3s + ' samples with the value 3'

  return string
}

function func5() {
  // How many measurements have no sample value greater than zero?
  return _.filter(items, function(d) { 
    return _.max(d['Samples']) <= 0
  }).length
}

function func6() {
  // Which valid (i.e., greater than zero) sample value is the most common?
  valueArray = []
  var samples = _.map(items, function(d) { 
    var filterData = _.map(d['Samples'], function(f) {
      if (f > 0) { valueArray[valueArray.length] = f }
    })
  })
  var groups = _.groupBy(valueArray)
  var values = _.mapValues(groups, function(d) {
    return d.length
  })
  var pairs = _.pairs(values)
  var sortedData = _.sortBy(pairs, function(d) {
    return -d[1]
  })
  return 'The most common sample value is ' + sortedData[0][0] + ' which occured ' + sortedData[0][1] + ' times.'
}

function func7() {
  // When was the boat furthest away from NYC (40.7127 N, 74.0059 W)? what was the distance?'
  // use Leaflet to draw a line between NYC and this "furtherest away" location

  // this sample code shows how to display a map and put a marker to visualize
  // the location of the first item (i.e., measurement data)
  // you need to adapt this code to answer the question

  // Get sample index of location furthest away from NYC, print distance from
  // NYC and the sample time, and draw a line from NYC to this furthest point

  var NYCCordinates = { latitude: 40.7127, longitude: -74.0059 }  // NYC

  var distances = _.map(items, function(d) {
    var boatCoordinates = { latitude: d.Latitude, longitude: d.Longitude }
    return geolib.getDistance(NYCCordinates, boatCoordinates)/1000
  })

  var maxDistance = _.max(distances)
  var index = _.findIndex(distances, function(d) {
    return d == maxDistance
  })
  var answer = 'The maximum boat distance from NYC during the tranverse is ' + maxDistance + ' km. at: ' + items[index].Ping_time

  var location = items[index]
  var pos = [location.Latitude, location.Longitude]
  var posFloat = [parseFloat(location.Latitude), parseFloat(location.Longitude)]

  var el = $(this).find('.viz')[index]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  var circle = L.circle(pos, 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(map);

  // Draw a line connecting between NYC and point of farthest departure
  var latlngs = [ [40.7127, -74.0059], posFloat]
  var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);

  return answer
}

function func8() {
  // What was the path of the boat?'
  // use Leaflet to draw a line between every two locations

  var location = items[0]
  var pos = [location.Latitude, location.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  var circle = L.circle(pos, 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);

  // Draw the boat traverse path
  var ndx = 0
  var vectors = _.map(items, function(d) {
    if (ndx < items.length - 1) {
      var location0 = items[ndx]
      var location1 = items[ndx+1]
      var latlng0 = [parseFloat(location0.Latitude), parseFloat(location0.Longitude)]
      var latlng1 = [parseFloat(location1.Latitude), parseFloat(location1.Longitude)]
      var latlngs = [latlng0, latlng1]
      var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);
      ndx++
    }
  })

  return '...'
}

function func9() {
  // Where were the most common sample value measured?'

  var location = items[0]
  var pos = [location.Latitude, location.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  // Find which sample value is the most common
  valueArray = []
  var samples = _.map(items, function(d) {
    var filterData = _.map(d['Samples'], function(f) {
      if (f > 0) { valueArray[valueArray.length] = f }
    })
  })
  var groups = _.groupBy(valueArray)
  var values = _.mapValues(groups, function(d) {
    return d.length
  })
  var pairs = _.pairs(values)
  var sortedData = _.sortBy(pairs, function(d) {
    return -d[1]
  })
  var mostCommon = sortedData[0][0]

  // Process to detect which locations had samples with the most common sample value and map
  var plotPoints = _.map(items, function(d) {
    var filterData = _.map(d['Samples'], function(f) {
      if (parseFloat(f) == mostCommon) {
        var latlng = [parseFloat(d.Latitude), parseFloat(d.Longitude)]
        L.circle(latlng, 50, {color: 'green', fillColor: '#f03', fillOpacity: 0.5}).addTo(map)
      }
    })
  })

  return 'The traverse shown identifies samples where the most common sample value was detected'
}

function func10() {
  // How does the density of valid sample values change across the geographical area?'
  // use the brightness to indicate high number of valid sample values each
  // for each measurement, draw a marker,
  // use the brightness to represent the number of valid samples
  // the brighter a spot, the higher the number
  // for those measurements without a valid sample, draw nothing

  // A valid sample value is greater than 0.00000

  var location = items[0]
  var pos = [location.Latitude, location.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  // Will alter the fill opacity value to represent a scaled valid-value density

  maxValidCount = 0
  var validValues = _.map(items, function(d) {
    var validCount = _.filter(d.Samples, function(f) {
      return f > 0
    }).length
    if (validCount > maxValidCount) { maxValidCount = validCount }
    return [ d.Latitude, d.Longitude, validCount ]
  })
  console.log('maxValidCount', maxValidCount)

  var plotDensity = _.map(validValues, function(d) {
    var latlng = [parseFloat(d[0]), parseFloat(d[1])]
    var opacity = d[2]/maxValidCount
    console.log('opacity', opacity)
    L.circle(latlng, 50, { fillColor: '#f03', fillOpacity: opacity}).addTo(map)
  })

  return 'Fill opacity represents the scaled valid-value density (darker is more valid sample values); NOTE: Zoom-in to see opacity changes detail'
}

function func11() {
  // What is the distribution of fish?
  return '...'
}

function func12() {
  // What is the distribution of  are schools of zooplankton?
  return '...'
}
