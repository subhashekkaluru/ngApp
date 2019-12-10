/**
 * @method polarToCartesian
 * @description Converts 2D polar coordinates (center, radius, angle) into cartesian coordinates (x,y). 
 * Used in the model dev dials and guages
 * @param {number} centerX 
 * @param {number} centerY 
 * @param {number} radius 
 * @param {number} angleInDegrees 
 * @return {object} Object `{x: xvalue, y: yvalue}` representing the cartesian coordinates corresponding to the input polar ones.
 */
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

/**
 * Create the `d` attribute of a `SVG` `path` that represents an arc with specified cartesian center, radius, start and
 * end angles.
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {number} startAngle 
 * @param {number} endAngle 
 * @return {string} the value for the said `d` attribute
 */
function describeArc(x, y, radius, startAngle, endAngle){
  let start = polarToCartesian(x, y, radius, endAngle);
  let end = polarToCartesian(x, y, radius, startAngle);
  let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  let d = [
    "M", start.x, start.y, 
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
  return d;       
};
/**
 * @module CALIBRATION_CHART
 * @description draws the Calibration chart shown on the `mp/mll/calibration` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var CALIBRATION_CHART=(function(my){
  my.type="calibration";

  my.optsGenerator=function(options){
    let opts=extend({},CHART.opts);
    // delete opts.axis.y.tick.count;
    // delete opts.axis.x.tick.count;
    
    delete opts.axis.x.label.text;
    
    let ymax=1;
    let ymin=0;
    if (options.data.y1.values.length>0){
      ymax=Math.max(...options.data.y1.values);
      ymin=Math.min(...options.data.y1.values);
    }
    
    let xmax=1;
    let xmin=0;
    if (options.data.y1.keys.length>0){
      xmax=Math.max(...options.data.y1.keys);
      xmin=Math.min(...options.data.y1.keys);
    }

    ymax=(Math.ceil(ymax*100)*0.01);
    ymin=(Math.ceil(ymin*100)*0.01);
    xmax=(Math.ceil(xmax*100)*0.01);
    xmin=(Math.ceil(xmin*100)*0.01);

    max=Math.max(ymax, xmax);
    min=Math.min(ymin, xmin);
    min-=0.05;max+=0.05;
    if (min<0) min=0;
    if (max>1) max=1;
    
    opts.axis.y.min=min;
    opts.axis.y.max=max;
    opts.axis.y.padding={top: 20, bottom: 20},
    
    opts.axis.x.min=min;
    opts.axis.x.max=max;
    opts.axis.x.padding={left: max/20.0, right: max/20.0};
    

    opts.bindto="#calibrationChart .graph";
    opts.axis.y.tick.format=d3.format(".2f");
    opts.axis.y.tick.values=[0,0.2,0.4,0.6,0.8,1.0,min,max];
    opts.axis.y.tick.values=opts.axis.y.tick.values.sort(function(x1,x2){return x1<x2;});
    opts.axis.x.tick.format=d3.format(".2f");
    opts.axis.x.tick.values=[0,0.2,0.4,0.6,0.8,1.0,min,max];
    opts.axis.x.tick.values=opts.axis.x.tick.values.sort(function(x1,x2){return x1<x2;});
    opts.axis.y.label.text="Fraction of positives";
    opts.id=my.type;
    opts.data={
      xs:{
        Reliability: "x1",
        Reference: "referencex"
      },
      columns: [
        ['x1'].concat(options.data.y1.keys),
        ['referencex', 0, max],
        [options.data.y1.name].concat(options.data.y1.values),
        ['Reference', 0, max]
      ],
      type: 'line',
      colors: {
         Reliability: CHART.colors[0],
         Reference: CHART.colors[1]
      }
    };
    opts.legend={
      show: true,
      hide: ['Reference']
    };
    opts.grid={
      x:{show: true/*, lines: [{value: 0.2}, {value: 0.4}, {value: 0.6}, {value: 0.8}]*/},
      y:{show: true},
    };
    opts.point={
      show: true,
      r: 5
    }
    opts.width=qs("#calibrationChart").offsetWidth -30;
    opts.height=qs("#calibrationChart").offsetHeight - qs("#calibrationChart h4").offsetHeight - 22;
    return opts;
  };
  my.generate=function(options){
    let opt=my.optsGenerator(options);
    CHART.charts[opt.id]=c3.generate(opt);
    d3.select(".c3-legend-item-Reliability text").text(`${options.data.scoreName}=${(d3.format(".3f"))(options.data.score)}`);
    return CHART.charts[opt.id];
  }

  return my;
}(CALIBRATION_CHART || {}));;
/**
 * @module CONFUSION_MATRIX
 * @description draws the Confusion Matrix shown on the `mp/mll/fprAndPA` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var CONFUSION_MATRIX=(function(my){
  my.type="confusionMatrix";

  my.optsGenerator=function(options){
    return options;
  };
  my.generate=function(options){
    let opts=my.optsGenerator(options);
    qsa("#confusionMatrix .graph").forEach(x=>x.remove());
    qsa("#confusionMatrix .graph-container").forEach(x=>x.removeClass("graph-container").addClass("confusion-matrix-tables"));
    qs("#confusionMatrix .confusion-matrix-tables").innerHTML=confusionmatrixtableTemplate(opts)
    return qs("#confusionMatrix");
  }

  return my;
}(CONFUSION_MATRIX || {}));
;
/**
 * @module DISCRIMINATION_CHART
 * @description draws the Discrimination box-chart shown on the `mp/mll/discrimination` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var DISCRIMINATION_CHART=(function(my){
  my.type="discrimination";

  my.optsGenerator=function(options){
    let opts=extend({}, options);
    
    opts.bindto="#discrimSlope .graph";
    opts.id=my.type;
    opts.colors= {
        y1: CHART.colors[0],
        y2: CHART.colors[1]
    };
    opts.width=qs("#rocCurve").offsetWidth -30;
    opts.height=qs("#rocCurve").offsetHeight - qs("#rocCurve h4").offsetHeight - 30;
    console.log(opts);
    return opts;
  };
  my.currentOptions=null;

  my.generate=function(options){
    let opt=null;
    if (!options) {
      opt=my.currentOptions;
    } else {
      my.currentOptions=opt=my.optsGenerator(options);
    }
    if (CHART.charts[opt.id]){
      my.clear(opt.id);
    }
    CHART.charts[opt.id]={
      element: my.createBoxChart(opt),
      isD3Chart: true,
      resize: function(){
        my.clear(opt.id);
        my.currentOptions.width = qs("#rocCurve").offsetWidth -30;
        my.currentOptions.height = qs("#rocCurve").offsetHeight - qs("#rocCurve h4").offsetHeight - 30;
        DISCRIMINATION_CHART.generate();
      },
      redraw: function(){
        DISCRIMINATION_CHART.generate();
      },
      clear: function(){
        DISCRIMINATION_CHART.clear(opt.id);
      }
    };
    return CHART.charts[opt.id];
  }

  var sortNumber = function(a,b){return a-b;};
  var boxQuartiles = function(d) {
  	return [
    	d3.quantile(d, .25),
    	d3.quantile(d, .5),
    	d3.quantile(d, .75)
  	];
	}
  my.createBoxChart = function(opt){
    let margin = {top: 10, right: 10, bottom: 30, left: 30};
    let width = opt.width - margin.left - margin.right;
    let height = opt.height - margin.top - margin.bottom;
    let barWidth = 30;

    let groupCounts = {};
    let globalCounts = [];

    for (y in opt.data){
      if (!groupCounts[opt.data[y].name]){
        groupCounts[opt.data[y].name]=[];
      }
      for (i in opt.data[y].values){
        let x=opt.data[y].values[i];
        groupCounts[opt.data[y].name].push(x);
        globalCounts.push(x);
      }
    }
    
    // Sort group counts so quantile methods work
    for (let key in groupCounts){
      let groupCount = groupCounts[key];
      groupCounts[key] = groupCount.sort(sortNumber);
    }

    // Setup a color scale for filling each box
    let colorScale = d3.scaleOrdinal([CHART.colors[3], CHART.colors[1]])
      .domain(Object.keys(groupCounts));

    // Prepare the data for the box plots
    let boxPlotData = [];
    for (let [key, groupCount] of Object.entries(groupCounts)) {
      let localMin = d3.min(groupCount);
      let localMax = d3.max(groupCount);

      let obj = {};
      obj["key"] = key;
      obj["counts"] = groupCount;
      obj["quartile"] = boxQuartiles(groupCount);
      obj["whiskers"] = [localMin, localMax];
      obj["color"] = colorScale(key);
      obj["lcolor"] = d3.color(colorScale(key)).brighter(2).hex();
      boxPlotData.push(obj);
    }

    // Compute an ordinal xScale for the keys in boxPlotData
    let xScale = d3.scalePoint()
      .domain(Object.keys(groupCounts))
      .rangeRound([0, width])
      .padding([0.5]);

    // Compute a global y scale based on the global counts
    let min = d3.min(globalCounts);
    let max = d3.max(globalCounts);
    let yScale = d3.scaleLinear()
      .domain([min-0.05, max+0.05])
      .range([height - 20, 0]);

    
    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    let svg=d3.select(opt.bindto).select("svg");
    if (svg.node()==null){
      svg = CHART.charts[opt.id]?CHART.charts[opt.id].element:d3.select(opt.bindto).append("svg");
    }
    svg.attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom);

    let outerGroup=svg.append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    // append a group for the box plot elements
    let g = outerGroup.append("g");

    // Draw the box plot vertical lines
    let verticalLines = g.selectAll(".verticalLines")
        .data(boxPlotData)
        .enter()
      .append("line")
        .attr("x1", function(datum) { return xScale(datum.key); })
        .attr("y1", function(datum) { return yScale(datum.whiskers[0]); })
        .attr("x2", function(datum) { return xScale(datum.key); })
        .attr("y2", function(datum) { return yScale(datum.whiskers[1]); })
        .attr("stroke", function(datum){return datum.lcolor; })
        .attr("stroke-width", 1)
        .attr("fill", "none");

    // Draw the boxes of the box plot, filled and on top of vertical lines
    let rects = g.selectAll("rect")
        .data(boxPlotData)
        .enter()
      .append("rect")
        .attr("width", barWidth)
        .attr("height", function(datum) {
          let quartiles = datum.quartile;
          let height =  yScale(quartiles[0]) - yScale(quartiles[2]);      
          return height;
        })
        .attr("x", function(datum) { return xScale(datum.key) - (barWidth/2); })
        .attr("y", function(datum) { return yScale(datum.quartile[2]); })
        .attr("fill", function(datum) { return datum.color; })
        .attr("stroke", function(datum){return datum.lcolor; })
        .attr("stroke-width", 0);

    // Now render all the horizontal lines at once - the whiskers and the median
    let horizontalLineConfigs = [
      // Top whisker
      {
        x1: function(datum) { return xScale(datum.key) - barWidth/2 },
        y1: function(datum) { return yScale(datum.whiskers[0]) },
        x2: function(datum) { return xScale(datum.key) + barWidth/2 },
        y2: function(datum) { return yScale(datum.whiskers[0]) }
      },
      // Median line
      {
        x1: function(datum) { return xScale(datum.key) - barWidth/2 },
        y1: function(datum) { return yScale(datum.quartile[1]) },
        x2: function(datum) { return xScale(datum.key) + barWidth/2 },
        y2: function(datum) { return yScale(datum.quartile[1]) }
      },
      // Bottom whisker
      {
        x1: function(datum) { return xScale(datum.key) - barWidth/2 },
        y1: function(datum) { return yScale(datum.whiskers[1]) },
        x2: function(datum) { return xScale(datum.key) + barWidth/2 },
        y2: function(datum) { return yScale(datum.whiskers[1]) }
      }
    ];

    for(let i=0; i < horizontalLineConfigs.length; i++) {
      let lineConfig = horizontalLineConfigs[i];

      // Draw the whiskers at the min for this series
      let horizontalLine = g.selectAll(".whiskers")
          .data(boxPlotData)
          .enter()
        .append("line")
          .attr("x1", lineConfig.x1)
          .attr("y1", lineConfig.y1)
          .attr("x2", lineConfig.x2)
          .attr("y2", lineConfig.y2)
          .attr("stroke", function(datum){return datum.lcolor;})
          .attr("stroke-width", 1)
          .attr("fill", "none");
    }

    // Move the left axis over 25 pixels, and the top axis over 35 pixels
    //let axisY = outerGroup.append("g").attr("transform", "translate(25,0)");
    //let axisX = outerGroup.append("g").attr("transform", "translate(35,0)");

    //x-axis
    outerGroup.append("g")
      .attr("class", "discriminationAxis")
      .attr("transform", `translate(0, ${height - 20})`)
      .call(d3.axisBottom(xScale));

    // Add the Y Axis
    outerGroup.append("g")
      .attr("class", "discriminationAxis")
      .call(d3.axisLeft(yScale));

    // Add the Score
    outerGroup.append("g")
      .append("text")
      .attr("transform", `translate(0, ${height+20})`)
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .attr("class", "discriminationTitle")
      .style("font-size", "0.8rem") 
      .attr("dominant-baseline", "hanging")
      .text(`Discrimination Score=${opt.score}`);

    return svg;
  };

  my.clear = function(id){
    CHART.charts[id].element.selectAll("*").remove();
    // CHART.charts[id].element.remove();
    delete CHART.charts[id];
  }

  return my;
}(DISCRIMINATION_CHART || {}));;
/**
 * @module KS_CHART
 * @description draws the KS chart shown on the `mp/mll/discrimination` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var KS_CHART=(function(my){
  my.type="ks";

  my.optsGenerator=function(options){
    let opts=extend({},CHART.opts);
    delete opts.axis.y.tick.values;
    opts.bindto="#ksGraph .graph";
    opts.id=my.type;
    opts.axis.y.tick.format=d3.format(".0%");
    opts.axis.y.label.text='Cumulative % < Score';
    let tickSpaces=5, tickSpacing=Math.round(Math.ceil(options.data.y1.keys[options.data.y1.keys.length-1]/10)*10)/tickSpaces;
    opts.axis.x={
      min: 0,
      // max: 1,
      tick:{
        values: Array.apply(null, {length: tickSpaces+1}).map((x, i)=>i*tickSpacing)
      },
      label:{
        text: 'Scorecard',
        position: 'outer-right'
      } 
    };
    opts.data={
      xs:{
        y: "x1",
        ydash: "x2"
      },
      columns: [
        ['x1'].concat(options.data.y1.keys),
        ['x2'].concat(options.data.y2.keys),
        [options.data.y1.name].concat(options.data.y1.values),
        [options.data.y2.name].concat(options.data.y2.values)
      ],
      type: 'line',
      colors: {
         y: CHART.colors[3],
         ydash: CHART.colors[1]
      },
      names:{
        y: "% Bad",
        ydash: "% Good"
      }
    };
    opts.grid={
      x:{show: true, lines: [{value: options.data.score, text: `KS=${options.data.score}`, class: 'ks-score'}]},
      y:{show: true},
    };
    opts.width=qs("#ksGraph").offsetWidth -30;
    opts.height=qs("#ksGraph").offsetHeight - qs("#ksGraph h4").offsetHeight - 22;

    return opts;
  }
  my.generate=function(options){
    let opt=my.optsGenerator(options);
    CHART.charts[opt.id]=c3.generate(opt);
    return CHART.charts[opt.id];
  }

  return my;
}(KS_CHART || {}));;
/**
 * @module LIFT_CHART
 * @description draws the Lift chart shown on the `mp/mll/discrimination` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var LIFT_CHART=(function(my){
  my.type="lift";

  my.optsGenerator=function(options){
    let opts=extend({}, CHART.opts);

    delete opts.axis.y.tick.values;
    delete opts.axis.y.max;
    delete opts.axis.y.tick.values;
    delete opts.axis.x.max;
    delete opts.axis.x.tick.values;

    opts.bindto="#liftGraph .graph";
    opts.id=my.type;
    opts.axis.y.tick.format=d3.format(".2");
    opts.axis.y.label.text="Lift";
    let tickSpaces=5, tickSpacing=Math.round(Math.ceil(options.data.y1.keys[options.data.y1.keys.length-1]/10)*10)/tickSpaces;
    opts.axis.x={
      min: 0,
      // max: 1,
      tick:{
        values: Array.apply(null, {length: tickSpaces+1}).map((x, i)=>i*tickSpacing)
      },
      label:{
        text: 'Decile',
        position: 'outer-right'
      } 
    }
    opts.data={
      xs:{
        y: "x1",
      },
      columns: [
        ['x1'].concat(options.data.y1.keys),
        [options.data.y1.name].concat(options.data.y1.values),
      ],
      type: 'line',
      colors: {
         y: CHART.colors[2],
      },
      names:{
        y: "Lift",
      }
    };
    opts.width=qs("#liftGraph").offsetWidth -30;
    opts.height=qs("#liftGraph").offsetHeight - qs("#liftGraph h4").offsetHeight - 22;
    opts.point={show: true};
    return opts;
  }
  my.generate=function(options){
    let opt=my.optsGenerator(options);
    CHART.charts[opt.id]=c3.generate(opt);
    return CHART.charts[opt.id];
  }

  return my;
}(LIFT_CHART || {}));
;
/**
 * @module OGIVE_CHART
 * @description draws the Ogive chart shown on the `mp/mll/fprAndPA` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var OGIVE_CHART=(function(my){
  my.type="ogive";

  my.optsGenerator=function(options){
    let opts=extend({},CHART.opts);
    delete opts.axis.y.tick.count;
    opts.bindto= "#ogiveCurve .graph";
    opts.axis.y.tick.format=d3.format(".2");
    opts.axis.y.label.text="Specificity / Sensitivity";
    opts.axis.x.label.text="Probability Levels";
    opts.legend={
      show: true,
    };
    opts.id=my.type;
    opts.data={
      xs:{
        Specificity: "x1",
        Sensitivity: "x2"
      },
      columns: [
        ['x1'].concat(options.data.y1.keys),
        ['x2'].concat(options.data.y2.keys),
        [options.data.y1.name].concat(options.data.y1.values),
        [options.data.y2.name].concat(options.data.y2.values),
      ],
      type: 'line',
      colors: {
         Specificity: CHART.colors[2],
         Sensitivity: CHART.colors[6]
      }
    };
    opts.grid={
      x:{show: true, lines: [{value: 0.2}, {value: 0.4}, {value: 0.6}, {value: 0.8}]},
      y:{show: true},
    };
    opts.width=qs("#ogiveCurve").offsetWidth -30;
    opts.height=qs("#ogiveCurve").offsetHeight - qs("#ogiveCurve h4").offsetHeight - 22;
    return opts;
  };
  my.generate=function(options){
    let opt=my.optsGenerator(options);
    CHART.charts[opt.id]=c3.generate(opt);
    // d3.select(".c3-legend-item-ROC text").text("AUC="+(d3.format(".3f"))(options.data.auc));
    return CHART.charts[opt.id];
  }

  return my;
}(OGIVE_CHART || {}));
;
/**
 * @module PRECISION_CHART
 * @description draws the Precision chart shown on the `mp/mll/fprAndPA` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var PRECISION_CHART=(function(my){
  my.type="precision";

  my.optsGenerator=function(options){
    let opts=extend({},CHART.opts);
    delete opts.axis.y.tick.count;
    delete opts.axis.y.min;
    delete opts.axis.y.max;
    delete opts.axis.y.tick.values;

    delete opts.axis.x.label.text;
    delete opts.axis.x.min;
    delete opts.axis.x.max;
    delete opts.axis.x.tick.values;
    
    opts.bindto="#precisionGraph .graph";
    opts.axis.y.tick.format=d3.format(".3");
    opts.axis.y.label.text="Precision";
    opts.axis.x.label.text="Sensitivity";
    opts.axis.x.tick.format=d3.format(".3");
    opts.id=my.type;
    opts.data={
      xs:{
        Reliability: "x1",
      },
      columns: [
        ['x1'].concat(options.data.y1.keys),
        [options.data.y1.name].concat(options.data.y1.values),
      ],
      type: 'line',
      colors: {
         Reliability: CHART.colors[0],
      }
    };
    opts.legend={
      show: false,
    };
    opts.grid={
      x:{show: true},
      y:{show: true},
    };
    opts.point={
      show: true,
      r: 3
    }
    opts.width=qs("#precisionGraph").offsetWidth -30;
    opts.height=qs("#precisionGraph").offsetHeight - qs("#precisionGraph h4").offsetHeight - 22;
    return opts;
  };
  my.generate=function(options){
    let opt=my.optsGenerator(options);
    CHART.charts[opt.id]=c3.generate(opt);
    return CHART.charts[opt.id];
  }

  return my;
}(PRECISION_CHART || {}));;
/**
 * @module PROB_LEVELS
 * @description draws the Probability Levels chart shown on the `mp/mll/fprAndPA` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var PROB_LEVELS=(function(my){
  my.type="probLevels";

  my.optsGenerator=function(options){
    options.attributes={
      "class": "scrollable-table",
    }
    return options;
  };
  my.generate=function(options){
    let opts=my.optsGenerator(options);
    qs("#probLevelsTableDiv").innerHTML=problevelstableTemplate(opts)
    return qs("#probLevels table");
  }

  return my;
}(PROB_LEVELS || {}));
;
/**
 * @module ROC_CHART
 * @description draws the ROC chart shown on the `mp/mll/discrimination` page. Implements the 
 * [`CHART`](module-CHART.html) interface.
 */
;var ROC_CHART=(function(my){
  my.type="roc";

  my.optsGenerator=function(options){
    let opts=extend({},CHART.opts);
    delete opts.axis.y.tick.count;
    opts.bindto= "#rocCurve .graph";
    opts.axis.y.tick.format=d3.format(".2");
    opts.axis.y.label.text="True Positive Rate";
    opts.axis.x.label.text="False Positive Rate";
    opts.legend={
      show: true,
      hide: ['Reference']
    };
    opts.id=my.type;
    opts.data={
      xs:{
        ROC: "x1",
        Reference: "x2"
      },
      columns: [
        ['x1'].concat(options.data.y1.keys),
        ['x2', 0, 1],
        [options.data.y1.name].concat(options.data.y1.values),
        ['Reference' , 0, 1]
      ],
      type: 'line',
      colors: {
         ROC: CHART.colors[0],
         Reference: CHART.colors[2]
      }
    };
    opts.grid={
      x:{show: true, lines: [{value: 0.2}, {value: 0.4}, {value: 0.6}, {value: 0.8}]},
      y:{show: true},
    };
    opts.width=qs("#rocCurve").offsetWidth -30;
    opts.height=qs("#rocCurve").offsetHeight - qs("#rocCurve h4").offsetHeight - 22;
    return opts;
  };
  my.generate=function(options){
    let opt=my.optsGenerator(options);
    CHART.charts[opt.id]=c3.generate(opt);
    d3.select(".c3-legend-item-ROC text").text("AUC="+(d3.format(".3f"))(options.data.auc));
    return CHART.charts[opt.id];
  }

  return my;
}(ROC_CHART || {}));
;
/**
 * @module CHART
 * @description 
 * This is a helper module that stores instances of various charts generated in the 
 * [`ML_LEADERBOARD`](module-ML_LEADERBOARD.html) module as key-value pairs with the 
 * chart's `type` as key and the `Chart` instance object as value. This module also
 * stores the palette that's used for coloring the graphs. A few details about how
 * to create the charts follow.
 * ## ML Leaderboard Charts
 * * [`ROC_CHART`](module-ROC_CHART.html)
 * * [`KS_CHART`](module-KS_CHART.html)
 * * [`DISCRIMINATION_CHART`](module-DISCRIMINATION_CHART.html)
 * * [`LIFT_CHART`](module-LIFT_CHART.html)
 * * [`CALIBRATOIN_CHART`](module-CALIBRATION_CHART.html)
 * * [`PROB_LEVELS`](module-PROB_LEVELS.html)
 * * [`PRECISION_CHART`](module-PRECISION_CHART.html)
 * * [`CONFUSION_MATRIX`](module-CONFUSION_MATRIX.html)
 * * [`OGIVE_CHART`](module-OGIVE_CHART.html)
 * ### Chart interface
 * Every chart module implements the following public properties and methods:
 * ```
 * string type
 * object optsGenerator(options)
 * chart generate(options)
 * ``` 
 * `type`: This is the name that forms the ID of the chart through all the lookup tables in the UI code
 * 
 * `optsGenerator()`: The d3.js chart needs a lot more options that are not affected by the data or the view, and hence are static for the particular chart. These options are set here. This is the method that takes the options object passed in from the generate() method and augments the options with defaults for this chart. This prevents the main view code from being made clunky with lots of chart  options.
 * 
 * `generate()`: This method is called from the leaderboard 
 * page to trigger a redraw of the chart. This is the 
 * method that calls `c3.js`'s `generate()` method and stores
 * the result chart object in the global CHART module. In
 * case of the Discrimination chart (which is directly implemented in `d3.js`) and the Confusion Matrix (which is a simple table with interactivity), the `generate()` method returns a returns an object that simulates the same
 * interface as the object returned by `c3.js`.
 */
;var CHART=(function(my){
  /**
   * @member {string} type This chart is never instantiated so its type is `null`
   * @public
   */
  my.type=null;

  /**
   * @member {string} svgNS
   * @description The SVG namespace. Needed for creating custom SVG components
   * @private
   */
  var svgNS = "http://www.w3.org/2000/svg"; 

  /**
   * @member {object} charts
   * @description The store into which each chart instance stores its generated chart. These
   * objects are used to trigger redraw and resize of the charts. It can also be used to change
   * the data drawn on the chart.
   * @public
   */
  my.charts={};

  /**
   * @member colors
   * @description An array of colors used in the charts. It helps to use numbered colors from here
   * to maintain consistency and to allow the charts to be restyled from a single place.
   * @public
   */
  my.colors= [
    "#f9bc38",
    "#85c72e",
    "#27c3ee",
    "#df3931",
    "#8f50b6",
    "#db1c9b",
    "#e63a13",
  ];

  /**
   * @member allowedCharts
   * @description This mapping is used to determine which charts should be rendered on 
   * which of the sub-pages of the leaderboard. The keys used here are the same as those that
   * trigger the router navigation to these pages.
   * @public
   */
  my.allowedCharts={
    "discrimination": [ROC_CHART.type, DISCRIMINATION_CHART.type, KS_CHART.type, LIFT_CHART.type],
    "calibration": [CALIBRATION_CHART.type],
    "fprAndPA": [PRECISION_CHART.type, OGIVE_CHART.type, PROB_LEVELS.type, CONFUSION_MATRIX.type]
  };

  /**
   * @member opts
   * @description These are the lowest common denominator options from which the options for 
   * individual charts are derived.
   * @public
   */
  my.opts={
    data: {
      type: 'line',
    },
    axis: {
      y: {
        max: 1,
        min: 0,
        padding: {top: 0, bottom: 0},
        tick:{
          values:[0,0.2,0.4,0.6,0.8,1.0],
          count: 6,
          outer: true,
        },
        label:{
          position: 'outer-right'
        } 
        // Range includes padding, set 0 if no padding needed
        // padding: {top:0, bottom:0}
      },
      x: {
        min: 0,
        max: 1,
        tick:{
          values: [0,0.2,0.4,0.6,0.8,1.0],
          count: 6,
          outer: true,
        },
        label:{
          position: 'outer-right'
        } 
      }
    },
    point: {
      show: false
    },
    legend:{
      show: true,
      color: "#ffffff"
    },
    transition: {
      duration: 100
    },

  };

  
  return my;
}(CHART || {}));
;
/**
 * Get the expiration date of n days from now
 * @param {number} cookieLife no. of days 
 */
function setExpiration(cookieLife){
  var today = new Date();
  var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
  return  expr.toGMTString();
}

/**
 * Set a nave-value cookie with specified expiry, path, domain
 * @param {string} name Name of the cookie
 * @param {string} value Value of the cookie
 * @param {number} expires Number of days until it expires
 * @param {string} path url path context
 * @param {string} domain cookie domain
 * @param {boolean} secure 
 */
function setCookie(name, value, expires, path, domain, secure){
	cookieStr = name + "=" + escape(value) + "; ";
	
	if(expires){
		expires = setExpiration(expires);
		cookieStr += "expires=" + expires + "; ";
	}
	if(path){
		cookieStr += "path=" + path + "; ";
	}
	if(domain){
		cookieStr += "domain=" + domain + "; ";
	}
	if(secure){
		cookieStr += "secure; ";
	}
	
	document.cookie = cookieStr;
}

/**
 * Read a named cookie
 * @param {string} name Lookup name of the cookie
 */
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};
/**
 * @function forEach
 * @description 
 * ## `NodeList.forEach`
 * Immitate Array.forEach for browsers where it isn't available
 * @param {function} callback function(node, index, NodeList) 
 * @param {object} thisArg the `this` context for the callback function
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (let i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

/**
 * @function qs 
 * @description 
 * ## `HTMLDocument.qs`
 * Alias for `document.querySelector`
 */
var qs = document.querySelector.bind(document);

/**
 * @function qsa
 * @description 
 * ## `HTMLDocument.qsa`
 * Alias for `document.querySelectorAll`
 */
var qsa = document.querySelectorAll.bind(document);

if (!Element.prototype.qs){
  /**
   * @function qs
   * @description 
   * ## `Element.qs`
   * Alias for `Element.querySelector`
   */
  Element.prototype.qs = function() {
    return this.querySelector.apply(this, arguments);
  };
  
  /**
   * @function qsa
   * @description 
   * ## `Element.qs`
   * Alias for `Element.querySelectorAll`
   */
  Element.prototype.qsa = function() {
    return this.querySelectorAll.apply(this, arguments);
  };
}

/**
 * @var {boolean} supportsPassive
 * @description Global variable that will indicate whether event listeners can be registerd to be called in a passive manner.
 * Passive scroll event listeners are executed without blocking the main UI thread.
 */
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

/**
 * Create a DOM node(s) from an HTML string
 * @param {string} s HTML string to create the DOM node for
 */
function createNode(s){
  var div=document.createElement("div");
  div.innerHTML=s;
  if (0===div.children.length){return null;}
  else if (1===div.children.length){return div.children[0];}
  return div.children;
}

/**
 * @function children
 * @description an analogue for jQuery.children. Find all descendents that match `selector`
 * @param {Element} el parent element
 * @param {string} selector CSS selector to identify the descendents to select
 * @returns {Array} An array of descendents that match the selector
 */ 
function children(el, selector){
  var descendents=el.qsa(selector);
  var children=[];
  if (descendents){
    for (i in descendents){
      var child=descendents[i];
      if (child.parentNode === el){
        children.push(child);
      }
    }
  }
  return children;
}

/**
 * @define matches
 * @description 
 * ## `Element.matches`
 * Cross browser compatibility for Element.matches.
 */
if (!Element.prototype.matches){
  Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

/**
 * @function closest
 * @description 
 * ## `Element.closest`
 * Get the closest ancestor that matches a selector
 * @param {string} s Selector to identify the ancestor to return
 * @return {Element} The closest ancestor in the DOM hierarchy that matches the selector `s`. If nothing matches and 
 * the traversal hits root, return `null`.
 */
if (!Element.prototype.closest){
  Element.prototype.closest = function(s) {
      var el = this;
      var ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
          if (ancestor.matches(s)) return ancestor;
          ancestor = ancestor.parentElement;
      } while (ancestor !== null); 
      return null;
  };
}

/**
 * @function attrs
 * @description 
 * ## `Element.attrs`
 * Return an array of attribute values for an array of attribute names passed to the function
 * @param {array|string} attrs A single a attribute name or an array of Attr objects or strings that are attribute names
 * @returns {array} An array of attribute values.
 * 
 */
if (!Element.prototype.attrs){
  Element.prototype.attrs=function(attrs){
    if (attrs && "array" !== (typeof attrs).toLowerCase() && "string" !== (typeof attrs).toLowerCase()){
      throw new Error("Argument should be array of attributes or a string of space/comma delimited attributes.");
    } else {
      attrs=Array.from(this.attributes);
    }
    if ("string" === typeof attrs){
      attrs=attrs.replace(/[\s]+,[\s]*|,[\s]*|[\s]+/g, ",").split(",");
    }
    var values={};
    attrs.forEach(attr => {
      if (attr instanceof Attr){
        values[attr.name]=attr.value;
      } else if(typeof attr == "string"){
        values[attr]=this.getAttribute(attr);
      }
    });
    return values;
  }
}

/**
 * @function toggleClass
 * @description 
 * ## `Element.toggleClass`
 * Adds the classes that are passed to the classList if absent, or removes them if present.
 * @param {array|string} classes one or more classnames either as an array or as a string of space/comma delimitted classes.
 * @returns {HTMLElement} The element passed as input to the method. Serves to chain functions.
 */
if (!Element.prototype.toggleClass){
  Element.prototype.toggleClass = function(classes){
    if ("array" !== (typeof classes).toLowerCase() && "string" !== (typeof classes).toLowerCase()){
      throw new Error("Argument should be array of classes or a string of space/comma delimited classes.");
    }
    if ("string" === typeof classes){
      classes=classes.replace(/[\s]+,[\s]*|,[\s]*|[\s]+/g, ",").split(",");
    }
    classes.forEach(cls => {
      this.classList.toggle(cls);
    });
    return this;
  }
}

/**
 * @function addClass
 * @description 
 * ## `Element.addClass`
 * Adds the classes that are passed to the classList if absent.
 * @param {array|string} classes one or more classnames either as an array or as a string of space/comma delimitted classes.
 * @returns {HTMLElement} The element passed as input to the method. Serves to chain functions.
 */
if (!Element.prototype.addClass){
  Element.prototype.addClass = function(classes){
    if ("array" !== (typeof classes).toLowerCase() && "string" !== (typeof classes).toLowerCase()){
      throw new Error("Argument should be array of classes or a string of space/comma delimited classes.");
    }
    if ("string" === typeof classes){
      classes=classes.replace(/[\s]+,[\s]*|,[\s]*|[\s]+/g, ",").split(",");
    }
    classes.forEach(cls => {
      this.classList.add(cls);
    });
    return this;
  }
}

/**
 * @function removeClass
 * @description 
 * ## `Element.removeClass`
 * Removes the classes that are passed from the classList if present.
 * @param {array|string} classes one or more classnames either as an array or as a string of space/comma delimitted classes.
 * @returns {HTMLElement} The element passed as input to the method. Serves to chain functions.
 */
if (!Element.prototype.removeClass){
  Element.prototype.removeClass = function(classes){
    if ("array" !== (typeof classes).toLowerCase() && "string" !== (typeof classes).toLowerCase()){
      throw new Error("Argument should be array of classes or a string of space/comma delimited classes.");
    }
    if ("string" === typeof classes){
      classes=classes.replace(/[\s]+,[\s]*|,[\s]*|[\s]+/g, ",").split(",");
    }
    classes.forEach(cls => {
      this.classList.remove(cls);
    });
    return this;
  }
}

/**
 * @function hasClass
 * @description 
 * ## `Element.hasClass`
 * Checks if the classList of an element contains one of the classes passed as a comma/space delimitted string.
 * @param {string} cls one or more classnames as a string of space/comma delimitted classes.
 * @returns {boolean} `true` if even one of the classes is present in the classList, `false` otherwise
 */
if (!Element.prototype.hasClass){
  Element.prototype.hasClass = function(cls){
    if ("string" !== (typeof cls).toLowerCase()){
      throw new Error("Argument should be a string classname.");
    }
    let classes=cls.replace(/[\s]+,[\s]*|,[\s]*|[\s]+/g, ",").split(",");
    if (classes.length==1){
      return this.classList.contains(cls);
    } else {
      for (let i=0;i<classes.length;i++){
        if (this.classList.contains(classes[i])){return true;}
      }
      return false;
    }
  }
}

/**
 * @function fireCustomEvent
 * @description
 * ## Element.fireCustomEvent
 * Fires a named custom event on an element that can be registered for with `Element.addEventListener()`.
 * @param {string} name Event name
 * @param {object} data Data that can be passed to the listener.
 */
if (!Element.prototype.fireCustomEvent){
  Element.prototype.fireCustomEvent = function(name, data){
    var e;
    if ("undefined" === typeof data || !data){
      data = {};
    }
    data.target = this;
    var eData = {
      detail: data
    }
    try {
      e = new CustomEvent(name, eData);
    } catch(err){
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(name, true, true, data);
    }
    this.dispatchEvent(e);
  }
}
;
/**
 * Create a DOM node(s) from an HTML string
 * @param {string} s 
 */
function createNode(s){
  var div=document.createElement("div");
  div.innerHTML=s;
  if (0===div.children.length){return null;}
  else if (1===div.children.length){return div.children[0];}
  return div.children;
}

/**
 * @function debounce 
 * @description Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {function} func Function to be debounced
 * @param {int} wait the number of milliseconds to wait before firing func again
 * @param {boolean} immediate if this is passed force call func
 * @return {function} Returns a function that you can register for your frequently called callback. It transmits the actual
 * event to the real listener only if it has been significantly long since the last time it was triggered.
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

/**
 * @function extend 
 * @description add new and over-ride if already exist, the properties in _to that also exist in _from.
 * Similar to jQuery.extend and PHP array_merge
 * @param {object} _to target map
 * @param {object} _from source map
 * @returns {object} The _to object with all the properties in _from copied over.
 */
function extend(_to, _from) {
  for (var fromProp in _from) {
      var fromVal = _from[fromProp];
      // Is this value an object?  If so, iterate over its properties, copying them over
      if (fromVal && Object.prototype.toString.call(fromVal) === "[object Object]") {
          _to[fromProp] = _to[fromProp] || {};
          extend(_to[fromProp], fromVal);
      }
      else {
          _to[fromProp] = fromVal;
      }
  }
  return _to;
};

/**
 * @function isDnDAvailable
 * @description Is Drag and Drop functionality available. This needs to be calculated differently for different browsers.
 * This function checks for the combination of factors and returns a single `boolean`.
 * @returns {boolean} True if Drag and Drop functionality is available.
 */
function isDnDAvailable(){
  var div=qs("div");
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}

/**
 * @function tableToExcel
 * @description Convert an HTML table to a data URI that the browser can save as an excel file.
 * @return {function} a function that can be called with an HTML table and a download file name.
 */
var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})();
;
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
;
(function() {

  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }

  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      }
      if (s.opacity < 1 ||
          invalid('zIndex', 'auto') ||
          invalid('transform', 'none') ||
          invalid('mixBlendMode', 'normal') ||
          invalid('filter', 'none') ||
          invalid('perspective', 'none') ||
          s['isolation'] === 'isolate' ||
          s.position === 'fixed' ||
          s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return /** @type {HTMLDialogElement} */ (el);
      }
      el = el.parentElement;
    }
    return null;
  }

  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */
  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }

  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */
  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */
  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }

  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;

    // Set a11y role. Browsers that support dialog implicitly know this already.
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;
      var cb = function() {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function(ev) {
        if (ev.target !== dialog) { return; }  // not for a child element
        var cand = 'DOMNodeRemoved';
        removed |= (ev.type.substr(0, cand.length) === cand);
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.

    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });

    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {

    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function() {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) { return; }
      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function() {
      if (!this.openAsModal_) { return; }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';

      // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }

      // Clear the backdrop and remove from the manager.
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal();  // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
          e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
          e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.qs('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function(el) {
          return el + ':not([disabled])';
        });
        // TODO(samthor): tabindex values that are not numeric are not focusable.
        query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
        target = this.dialog_.qs(query.join(', '));
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }
      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' +
            'This may cause it to be unusable. For more information, see this link: ' +
            'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true;

      // Optionally center vertically, relative to the current viewport.
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }

      // Insert backdrop.
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

      // Focus on whatever inside the dialog.
      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }
      this.setOpen(false);

      // Leave returnValue untouched in case it was set directly on the element
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }

      // Triggering "close" event for any attached listeners on the <dialog>.
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }

  };

  var dialogPolyfill = {};

  dialogPolyfill.reposition = function(element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null;
      // Some browsers throw on cssRules.
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}
      if (!cssRules) { continue; }
      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null;
        // Ignore errors on invalid selector texts.
        try {
          selectedNodes = qsa(rule.selectorText);
        } catch(e) {}
        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }
        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');
        if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
          return true;
        }
      }
    }
    return false;
  };

  dialogPolyfill.needsCentering = function(dialog) {
    var computedStyle = window.getComputedStyle(dialog);
    if (computedStyle.position !== 'absolute') {
      return false;
    }

    // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.
    if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
        (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
      return false;
    }
    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };

  /**
   * @param {!Element} element to force upgrade
   */
  dialogPolyfill.forceRegisterDialog = function(element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' +
          'may not work correctly', element);
    }
    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }
    new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
  };

  /**
   * @param {!Element} element to upgrade, if necessary
   */
  dialogPolyfill.registerDialog = function(element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };

  /**
   * @constructor
   */
  dialogPolyfill.DialogManager = function() {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];

    var checkDOM = this.checkDOM_.bind(this);

    // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.
    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function(e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]);  // sanity-check DOM
    }.bind(this));

    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);

    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;

    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function(records) {
        var removed = [];
        records.forEach(function(rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }
            removed = removed.concat(c.qsa('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };

  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */
  dialogPolyfill.DialogManager.prototype.blockDocument = function() {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
  };

  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */
  dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };

  /**
   * Updates the stacking of all known dialogs.
   */
  dialogPolyfill.DialogManager.prototype.updateStacking = function() {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);
      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    }

    // Make the overlay a sibling of the dialog itself.
    var last = this.pendingDialogStack[0];
    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };

  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */
  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0;  // only valid if top-most
        }
      }
      candidate = candidate.parentElement;
    }
    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
    if (this.containedByTopDialog_(event.target)) { return; }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(/** @type {Element} */ (event.target));

    if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {  // forward
        dpi.focus_();
      } else {  // backwards
        document.documentElement.focus();
      }
    } else {
      // TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };

  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */
  dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function(dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */
  dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }
    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }
    this.updateStacking();
    return true;
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   */
  dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);
    if (index === -1) { return; }

    this.pendingDialogStack.splice(index, 1);
    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }
    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;

  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */
  if (window.HTMLDialogElement === undefined) {

    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;
        methodDescriptor.get = function() {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.set;
        methodDescriptor.set = function(v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }

    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */
    document.addEventListener('click', function(ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;
      if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

      var target = /** @type {Element} */ (ev.target);
      if (!target || !isFormMethodDialog(target.form)) { return; }

      var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) { return; }
        // this is a <input type="image">, which can submit forms
        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);
      if (!dialog) { return; }

      dialogPolyfill.formSubmitter = target;
    }, false);

    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function () {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;

    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */
    document.addEventListener('submit', function(ev) {
      var form = /** @type {HTMLFormElement} */ (ev.target);
      if (!isFormMethodDialog(form)) { return; }
      ev.preventDefault();

      var dialog = findNearestDialog(form);
      if (!dialog) { return; }

      // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.
      var s = dialogPolyfill.formSubmitter;
      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }
      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if (typeof define === 'function' && 'amd' in define) {
    // AMD support
    define(function() { return dialogPolyfill; });
  } else if (typeof module === 'object' && typeof module['exports'] === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();
;
var MediaState = function(){
  this.device=null;
  this.orientation=null;
  var _this = this;
  window.addEventListener("orientationchange", function(){_this.detect();});
  window.addEventListener("resize", debounce(function(){_this.detect();}, 250), supportsPassive ? {passive: true} : false); 
  this.detect();
};
MediaState.prototype.equals = function( x ){return (x!=null && ("undefined"!==typeof x) && this.device === x.device && this.orientation===x.orientation);};
MediaState.prototype.fireChange = function(){document.body.fireCustomEvent("mediaChanged");};
MediaState.prototype.assign = function( x ){this.device = x.device; this.orientation = x.orientation; this.fireChange();};
MediaState.prototype.detect = function(){
  var mobile = window.matchMedia("(max-width: 500px)");
  var tablet = window.matchMedia("(min-width: 501px) and (max-width: 768px)");
  var laptop = window.matchMedia("(min-width: 769px) and (max-width: 1366px)");
  var desktop = window.matchMedia("(min-width: 1367px)");
  var portrait = window.matchMedia("(orientation: portrait");

  var changed=false;

  if (mobile.matches){this.device = "mobile"; changed=true;}
  if (tablet.matches){this.device = "tablet"; changed=true;}
  if (laptop.matches){this.device = "laptop"; changed=true;}
  if (desktop.matches){this.device = "desktop"; changed=true;}
  if (portrait.matches){
    if (this.orientation != "portrait"){
      this.orientation = "portrait";
      changed=true;
    }
  } else {
    if (this.orientation != "landscape"){
      this.orientation = "landscape";
      changed=true;
    }
  }
  if (changed){
    this.fireChange();
  }
};
;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Navigo = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isPushStateAvailable() {
  return !!(typeof window !== 'undefined' && window.history && window.history.pushState);
}

function Navigo(r, useHash, hash) {
  this.root = null;
  this._routes = [];
  this._useHash = useHash;
  this._hash = typeof hash === 'undefined' ? '#' : hash;
  this._paused = false;
  this._destroyed = false;
  this._lastRouteResolved = null;
  this._notFoundHandler = null;
  this._defaultHandler = null;
  this._usePushState = !useHash && isPushStateAvailable();
  this._onLocationChange = this._onLocationChange.bind(this);
  this._genericHooks = null;
  this._historyAPIUpdateMethod = 'pushState';

  if (r) {
    this.root = useHash ? r.replace(/\/$/, '/' + this._hash) : r.replace(/\/$/, '');
  } else if (useHash) {
    this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, '/' + this._hash);
  }

  this._listen();
  this.updatePageLinks();
}

function clean(s) {
  if (s instanceof RegExp) return s;
  return s.replace(/\/+$/, '').replace(/^\/+/, '^/');
}

function regExpResultToParams(match, names) {
  if (names.length === 0) return null;
  if (!match) return null;
  return match.slice(1, match.length).reduce(function (params, value, index) {
    if (params === null) params = {};
    params[names[index]] = decodeURIComponent(value);
    return params;
  }, null);
}

function replaceDynamicURLParts(route) {
  var paramNames = [],
      regexp;

  if (route instanceof RegExp) {
    regexp = route;
  } else {
    regexp = new RegExp(route.replace(Navigo.PARAMETER_REGEXP, function (full, dots, name) {
      paramNames.push(name);
      return Navigo.REPLACE_VARIABLE_REGEXP;
    }).replace(Navigo.WILDCARD_REGEXP, Navigo.REPLACE_WILDCARD) + Navigo.FOLLOWED_BY_SLASH_REGEXP, Navigo.MATCH_REGEXP_FLAGS);
  }
  return { regexp: regexp, paramNames: paramNames };
}

function getUrlDepth(url) {
  return url.replace(/\/$/, '').split('/').length;
}

function compareUrlDepth(urlA, urlB) {
  return getUrlDepth(urlB) - getUrlDepth(urlA);
}

function findMatchedRoutes(url) {
  var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return routes.map(function (route) {
    var _replaceDynamicURLPar = replaceDynamicURLParts(clean(route.route)),
        regexp = _replaceDynamicURLPar.regexp,
        paramNames = _replaceDynamicURLPar.paramNames;

    var match = url.replace(/^\/+/, '/').match(regexp);
    var params = regExpResultToParams(match, paramNames);

    return match ? { match: match, route: route, params: params } : false;
  }).filter(function (m) {
    return m;
  });
}

function match(url, routes) {
  return findMatchedRoutes(url, routes)[0] || false;
}

function root(url, routes) {
  var matched = routes.map(function (route) {
    return route.route === '' || route.route === '*' ? url : url.split(new RegExp(route.route + '($|\/)'))[0];
  });
  var fallbackURL = clean(url);

  if (matched.length > 1) {
    return matched.reduce(function (result, url) {
      if (result.length > url.length) result = url;
      return result;
    }, matched[0]);
  } else if (matched.length === 1) {
    return matched[0];
  }
  return fallbackURL;
}

function isHashChangeAPIAvailable() {
  return typeof window !== 'undefined' && 'onhashchange' in window;
}

function extractGETParameters(url) {
  return url.split(/\?(.*)?$/).slice(1).join('');
}

function getOnlyURL(url, useHash, hash) {
  var onlyURL = url,
      split;
  var cleanGETParam = function cleanGETParam(str) {
    return str.split(/\?(.*)?$/)[0];
  };

  if (typeof hash === 'undefined') {
    // To preserve BC
    hash = '#';
  }

  if (isPushStateAvailable() && !useHash) {
    onlyURL = cleanGETParam(url).split(hash)[0];
  } else {
    split = url.split(hash);
    onlyURL = split.length > 1 ? cleanGETParam(split[1]) : cleanGETParam(split[0]);
  }

  return onlyURL;
}

function manageHooks(handler, hooks, params) {
  if (hooks && (typeof hooks === 'undefined' ? 'undefined' : _typeof(hooks)) === 'object') {
    if (hooks.before) {
      hooks.before(function () {
        var shouldRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!shouldRoute) return;
        handler();
        hooks.after && hooks.after(params);
      }, params);
      return;
    } else if (hooks.after) {
      handler();
      hooks.after && hooks.after(params);
      return;
    }
  }
  handler();
}

function isHashedRoot(url, useHash, hash) {
  if (isPushStateAvailable() && !useHash) {
    return false;
  }

  if (!url.match(hash)) {
    return false;
  }

  var split = url.split(hash);

  return split.length < 2 || split[1] === '';
}

Navigo.prototype = {
  helpers: {
    match: match,
    root: root,
    clean: clean,
    getOnlyURL: getOnlyURL
  },
  navigate: function navigate(path, absolute) {
    var to;

    path = path || '';
    if (this._usePushState) {
      to = (!absolute ? this._getRoot() + '/' : '') + path.replace(/^\/+/, '/');
      to = to.replace(/([^:])(\/{2,})/g, '$1/');
      history[this._historyAPIUpdateMethod]({}, '', to);
      this.resolve();
    } else if (typeof window !== 'undefined') {
      path = path.replace(new RegExp('^' + this._hash), '');
      window.location.href = window.location.href.replace(/#$/, '').replace(new RegExp(this._hash + '.*$'), '') + this._hash + path;
    }
    return this;
  },
  on: function on() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'function') {
      this._defaultHandler = { handler: args[0], hooks: args[1] };
    } else if (args.length >= 2) {
      if (args[0] === '/') {
        var func = args[1];

        if (_typeof(args[1]) === 'object') {
          func = args[1].uses;
        }

        this._defaultHandler = { handler: func, hooks: args[2] };
      } else {
        this._add(args[0], args[1], args[2]);
      }
    } else if (_typeof(args[0]) === 'object') {
      var orderedRoutes = Object.keys(args[0]).sort(compareUrlDepth);

      orderedRoutes.forEach(function (route) {
        _this.on(route, args[0][route]);
      });
    }
    return this;
  },
  off: function off(handler) {
    if (this._defaultHandler !== null && handler === this._defaultHandler.handler) {
      this._defaultHandler = null;
    } else if (this._notFoundHandler !== null && handler === this._notFoundHandler.handler) {
      this._notFoundHandler = null;
    }
    this._routes = this._routes.reduce(function (result, r) {
      if (r.handler !== handler) result.push(r);
      return result;
    }, []);
    return this;
  },
  notFound: function notFound(handler, hooks) {
    this._notFoundHandler = { handler: handler, hooks: hooks };
    return this;
  },
  resolve: function resolve(current) {
    var _this2 = this;

    var handler, m;
    var url = (current || this._cLoc()).replace(this._getRoot(), '');

    if (this._useHash) {
      url = url.replace(new RegExp('^\/' + this._hash), '/');
    }

    var GETParameters = extractGETParameters(current || this._cLoc());
    var onlyURL = getOnlyURL(url, this._useHash, this._hash);

    if (this._paused) return false;

    if (this._lastRouteResolved && onlyURL === this._lastRouteResolved.url && GETParameters === this._lastRouteResolved.query) {
      if (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already) {
        this._lastRouteResolved.hooks.already(this._lastRouteResolved.params);
      }
      return false;
    }

    m = match(onlyURL, this._routes);

    if (m) {
      this._callLeave();
      this._lastRouteResolved = {
        url: onlyURL,
        query: GETParameters,
        hooks: m.route.hooks,
        params: m.params,
        name: m.route.name
      };
      handler = m.route.handler;
      manageHooks(function () {
        manageHooks(function () {
          m.route.route instanceof RegExp ? handler.apply(undefined, m.match.slice(1, m.match.length)) : handler(m.params, GETParameters);
        }, m.route.hooks, m.params, _this2._genericHooks);
      }, this._genericHooks, m.params);
      return m;
    } else if (this._defaultHandler && (onlyURL === '' || onlyURL === '/' || onlyURL === this._hash || isHashedRoot(onlyURL, this._useHash, this._hash))) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._defaultHandler.hooks };
          _this2._defaultHandler.handler(GETParameters);
        }, _this2._defaultHandler.hooks);
      }, this._genericHooks);
      return true;
    } else if (this._notFoundHandler) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._notFoundHandler.hooks };
          _this2._notFoundHandler.handler(GETParameters);
        }, _this2._notFoundHandler.hooks);
      }, this._genericHooks);
    }
    return false;
  },
  destroy: function destroy() {
    this._routes = [];
    this._destroyed = true;
    this._lastRouteResolved = null;
    this._genericHooks = null;
    clearTimeout(this._listeningInterval);
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this._onLocationChange);
      window.removeEventListener('hashchange', this._onLocationChange);
    }
  },
  updatePageLinks: function updatePageLinks() {
    var self = this;

    if (typeof document === 'undefined') return;

    this._findLinks().forEach(function (link) {
      if (!link.hasListenerAttached) {
        link.addEventListener('click', function (e) {
          if ((e.ctrlKey || e.metaKey) && e.target.tagName.toLowerCase() == 'a') {
            return false;
          }
          var location = self.getLinkPath(link);

          if (!self._destroyed) {
            e.preventDefault();
            self.navigate(location.replace(/\/+$/, '').replace(/^\/+/, '/'));
          }
        });
        link.hasListenerAttached = true;
      }
    });
  },
  generate: function generate(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var result = this._routes.reduce(function (result, route) {
      var key;

      if (route.name === name) {
        result = route.route;
        for (key in data) {
          result = result.toString().replace(':' + key, data[key]);
        }
      }
      return result;
    }, '');

    return this._useHash ? this._hash + result : result;
  },
  link: function link(path) {
    return this._getRoot() + path;
  },
  pause: function pause() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this._paused = status;
    if (status) {
      this._historyAPIUpdateMethod = 'replaceState';
    } else {
      this._historyAPIUpdateMethod = 'pushState';
    }
  },
  resume: function resume() {
    this.pause(false);
  },
  historyAPIUpdateMethod: function historyAPIUpdateMethod(value) {
    if (typeof value === 'undefined') return this._historyAPIUpdateMethod;
    this._historyAPIUpdateMethod = value;
    return value;
  },
  disableIfAPINotAvailable: function disableIfAPINotAvailable() {
    if (!isPushStateAvailable()) {
      this.destroy();
    }
  },
  lastRouteResolved: function lastRouteResolved() {
    return this._lastRouteResolved;
  },
  getLinkPath: function getLinkPath(link) {
    return link.getAttribute('href');
  },
  hooks: function hooks(_hooks) {
    this._genericHooks = _hooks;
  },

  _add: function _add(route) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var hooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (typeof route === 'string') {
      route = encodeURI(route);
    }
    this._routes.push((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object' ? {
      route: route,
      handler: handler.uses,
      name: handler.as,
      hooks: hooks || handler.hooks
    } : { route: route, handler: handler, hooks: hooks });

    return this._add;
  },
  _getRoot: function _getRoot() {
    if (this.root !== null) return this.root;
    this.root = root(this._cLoc().split('?')[0], this._routes);
    return this.root;
  },
  _listen: function _listen() {
    var _this3 = this;

    if (this._usePushState) {
      window.addEventListener('popstate', this._onLocationChange);
    } else if (isHashChangeAPIAvailable()) {
      window.addEventListener('hashchange', this._onLocationChange);
    } else {
      var cached = this._cLoc(),
          current = void 0,
          _check = void 0;

      _check = function check() {
        current = _this3._cLoc();
        if (cached !== current) {
          cached = current;
          _this3.resolve();
        }
        _this3._listeningInterval = setTimeout(_check, 200);
      };
      _check();
    }
  },
  _cLoc: function _cLoc() {
    if (typeof window !== 'undefined') {
      if (typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ !== 'undefined') {
        return window.__NAVIGO_WINDOW_LOCATION_MOCK__;
      }
      return clean(window.location.href);
    }
    return '';
  },
  _findLinks: function _findLinks() {
    return [].slice.call(qsa('[data-navigo]'));
  },
  _onLocationChange: function _onLocationChange() {
    this.resolve();
  },
  _callLeave: function _callLeave() {
    var lastRouteResolved = this._lastRouteResolved;

    if (lastRouteResolved && lastRouteResolved.hooks && lastRouteResolved.hooks.leave) {
      lastRouteResolved.hooks.leave(lastRouteResolved.params);
    }
  }
};

Navigo.PARAMETER_REGEXP = /([:*])(\w+)/g;
Navigo.WILDCARD_REGEXP = /\*/g;
Navigo.REPLACE_VARIABLE_REGEXP = '([^\/]+)';
Navigo.REPLACE_WILDCARD = '(?:.*)';
Navigo.FOLLOWED_BY_SLASH_REGEXP = '(?:\/$|$)';
Navigo.MATCH_REGEXP_FLAGS = '';

return Navigo;

})));
;
function fixTable(container) {
  // Store references to table elements
  var thead = container.querySelector('thead');
  var tbody = container.querySelector('tbody');

  // Style container
  container.style.overflow = 'auto';
  container.style.position = 'relative';

  // Add inline styles to fix the header row and leftmost column
  function relayout() {
    var ths = [].slice.call(thead.querySelectorAll('th'));
    var tbodyTrs = [].slice.call(tbody.querySelectorAll('tr'));

    /**
     * Remove inline styles so we resort to the default table layout algorithm
     * For thead, th, and td elements, don't remove the 'transform' styles applied
     * by the scroll event listener
     */
    tbody.setAttribute('style', '');
    thead.style.width = '';
    thead.style.position = '';
    thead.style.top = '';
    thead.style.left = '';
    thead.style.zIndex = '';
    ths.forEach(function(th) {
      th.style.display = '';
      th.style.width = '';
      th.style.position = '';
      th.style.top = '';
      th.style.left = '';
    });
    tbodyTrs.forEach(function(tr) {
      tr.setAttribute('style', '');
    });
    [].slice.call(tbody.querySelectorAll('td'))
      .forEach(function(td) {
        td.style.width = '';
        td.style.position = '';
        td.style.left = '';
      });

    /**
     * Store width and height of each th
     * getBoundingClientRect()'s dimensions include paddings and borders
     */
    var thStyles = ths.map(function(th) {
      var rect = th.getBoundingClientRect();
      var style = document.defaultView.getComputedStyle(th, '');
      return {
        boundingWidth: rect.width,
        boundingHeight: rect.height,
        width: parseInt(style.width, 10),
        paddingLeft: parseInt(style.paddingLeft, 10)
      };
    });

    // Set widths of thead and tbody
    var totalWidth = thStyles.reduce(function(sum, cur) {
      return sum + cur.boundingWidth;
    }, 0);
    tbody.style.display = 'block';
    tbody.style.width = totalWidth + 'px';
    thead.style.width = totalWidth - thStyles[0].boundingWidth + 'px';

    // Position thead
    thead.style.position = 'absolute';
    thead.style.top = '0';
    thead.style.left = thStyles[0].boundingWidth + 'px';
    thead.style.zIndex = 10;

    // Set widths of the th elements in thead. For the fixed th, set its position
    ths.forEach(function(th, i) {
      th.style.width = thStyles[i].width + 'px';
      if (i === 0) {
        th.style.position = 'absolute';
        th.style.top = '0';
        th.style.left = -thStyles[0].boundingWidth + 'px';
      }
    });

    // Set margin-top for tbody - the fixed header is displayed in this margin
    tbody.style.marginTop = thStyles[0].boundingHeight + 'px';

    // Set widths of the td elements in tbody. For the fixed td, set its position
    tbodyTrs.forEach(function(tr, i) {
      tr.style.display = 'block';
      tr.style.paddingLeft = thStyles[0].boundingWidth + 'px';
      [].slice.call(tr.querySelectorAll('td'))
        .forEach(function(td, j) {
          td.style.width = thStyles[j].width + 'px';
          if (j === 0) {
            td.style.position = 'absolute';
            td.style.left = '0';
          }
        });
    });
  }

  // Initialize table styles
  relayout();

  // Update table cell dimensions on resize
  window.addEventListener('resize', resizeThrottler, false);
  var resizeTimeout;
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        relayout();
      }, 500);
    }
  }

  // Fix thead and first column on scroll
  container.addEventListener('scroll', function() {
    thead.style.transform = 'translate3d(0,' + this.scrollTop + 'px,0)';
    var hTransform = 'translate3d(' + this.scrollLeft + 'px,0,0)';
    thead.querySelector('th').style.transform = hTransform;
    [].slice.call(tbody.querySelectorAll('tr > td:first-child'))
      .forEach(function(td, i) {
        td.style.transform = hTransform;
      });
  });

  /**
   * Return an object that exposes the relayout function so that we can
   * update the table when the number of columns or the content inside columns changes
   */
  return {
    relayout: relayout
  };
}
;
/**
 * @module COMPACT_LABEL
 * @description Functionality for a compact label that becomes small on focus or content
 */

;var COMPACT_LABEL=(function(my){
  /**
   * @method registerCompactLabel 
   * @description should be called on new instances of compactLabels. 
   * This registers anonymous listeners on HTMLInputElement inside each compactLabel 
   * so that a 'not-empty' class is added to the input if it is has content. This is then used 
   * to show the small label if there is content in the input box. Without this the label will
   * show on top of the input box when it loses focus.
   * @param {string[]} labels if no compactLabels are passed, method finds and executes on all label.compact that it can find on the page.
   * @public
   */
  my.registerCompactLabel=function(labels){
    if (!labels || "undefined" === typeof labels) {
      labels=qsa("label.compact");
    }
    if ("undefined" !== typeof labels.tagName){labels=[labels];}
    labels.forEach(label=>{
      
      var box = label.qs("input,textarea,select");
      if (box && "undefined" !== typeof box){
        box.addEventListener("change", boxEventListener);
        box.addEventListener("keyup", boxEventListener);
        boxEventListener({currentTarget: box});
        compactObserver.observe(box, {childList: true});
      }
    });
  };

  /**
   * @member {MutationObserver} compactObserver
   * @description Listen for `compactLabel`s inside dialogs and boxes.
   * @private
   */
  var compactObserver=new MutationObserver(mutationsList=>{
    for (var mutation of mutationsList){
      if (mutation.type=='childList'){
        boxEventListener({currentTarget: mutation.target});
      }
    }
  });

  /**
   * @method boxEventListener
   * @description Listen for changes to contents / focus of textbox and update label location. Perform 
   * pattern validation check
   * @param {Event} evt 
   * @private
   */
  var boxEventListener=function(evt){
    if (evt.currentTarget.value && evt.currentTarget.value.length>0){
      evt.currentTarget.setAttribute("not-empty", "true");
      evt.currentTarget.closest("label").setAttribute("not-empty", "true");
    } else {
      evt.currentTarget.removeAttribute("not-empty");
      evt.currentTarget.closest("label").removeAttribute("not-empty");
    }
    let box=evt.currentTarget;
    if (box.getAttribute("pattern")){
      box.removeClass("invalid");
      let regex= new RegExp(box.getAttribute("pattern"), "g");
      let val=box.value.trim();
      let match = regex.exec(val);
      if (!match || match==null || typeof match.index == "undefined" || match.index !== 0 ){
        box.addClass("invalid");
      }
    }
  };

  /**
   * @method deregister
   * @description deregister for keyboard and change events. Useful when temporarily closing dialog boxes or tabs
   * @param {HTMLInputElement} compactLabel
   * @public
   */
  my.deregister=function(compactLabel){
    compactLabel.removeEventListener("change", boxEventListener);
    compactLabel.removeEventListener("keyup", boxEventListener);
  }
  return my;
}(COMPACT_LABEL || {}));
;
/**
 * @module DIAL
 * @description Functionality for a dial shaped progress bar
 */
;var DIAL=(function(my){
    /**
   * @alias MutationObserver
   * @description Work around browser differences
   */
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  /**
   * @member {MutationObserver} dialObserver
   * @description Listen for change in value and update the dials progress depiction
   * @private
   */
  var dialObserver=new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type == "attributes" && mutation.attributeName == "data-value") {
        mutation.target.nextElementSibling.qs("span").innerText=mutation.target.getAttribute("data-value")
      }
    });
  });

  /**
   * @method registerDial 
   * @description should be called on new instances of dials so that their progress content is updated 
   * when you set its progress value. 
   * @param {HTMLElement[]} dts NodeList of dt elements or a single dt element;
   * @public
   */
  my.registerDial=function(dts){
    if (!dts || "undefined" === typeof dts) {
      dts=qsa("dt.dial");
    }
    if ("undefined" !== typeof dts.tagName){dts=[dts];}
    [].forEach.call(dts, function(dt){
      dialObserver.observe(dt, {attributes: true});
    });
  };
  return my;
}(DIAL || {}));

;
/**
 * @module CREDENTIALS
 * @description This file does all the work of obtaining and storing credentials except for the server call to authenticate.
 * stores userHash which is used in all server calls
 */
var CREDENTIALS = (function(my){
  /**
   * @member {string} apiEndpoint unused
   * @private
   */
  var apiEndpoint="";

  /**
   * @member {string} userHash the session key returned by the login API that identifies the user. 
   * This needs to be sent with every API call.
   * @private
   */
  var userHash=null;

  /**
   * @member {boolean} cachedCredsLoaded whether they have been checked, not whether they are valid
   * @private
   */
  var cachedCredsLoaded=false;

  /**
   * @method loadCreds 
   * @description Load user hash from the cookie. check if it is valid. Set into userHash
   * @return {string} userHash if available from cookie else null;
   * @private
   */
  loadCreds = function(){
    userHash = readCookie("userHash");
    if (!checkCachedCreds()){
      userHash=null;
    } 
    cachedCredsLoaded = true;
    return userHash;
  };

  /**
   * @method obtainCreds 
   * @description Contact server using login API and username and password. Get user cred and update
   * userHash. store userHash in cookie. Currently using unhashed cleartext password because
   * of time restrictions. CHANGE AS SOON AS POSSIBLE!
   * @modifies navigation-links left navigation login/logout links are updated 
   * @modifies cookie sets the cookie to store the userHash
   * @param {string} username username
   * @param {string} password cleartext password
   * @return {string} userHash obtained from server
   * @public
   */
  my.obtainCreds = async function(username, password){
    await authenticate({uname: username, password: password})
      .then(response=>{
        userHash=""+response;
      });
    if (userHash != null){
      setCookie("userHash", userHash)
    }
    my.updateLoginLogoutLinks();
    return userHash;
  };

  /**
   * @method authenticate 
   * @description Calls the server with username/password and obtains a user hash.
   * @param {Object} iparams {uname: <username>, password: <password>}
   * @return {Promise} a promise that resolves to the user hash
   * @throws {Error} All errors are stupidly thrown as "Incorrect username or password"
   * @public
   */
  authenticate=async function(iparams){
    const url=SERVER.getBaseAddress() + "login/authenticate";
    let params=extend({"uname":"", "password":""}, iparams);
    if (params.uname.length===0 || params.password.length===0){
      throw new Error(i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD);
    }
    var result=null;
    var hash=null;
    try{
      if (useTestData){
        result=await CREDENTIALS_DATA.login(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    try{
      if (result!=null){
        if (result.status==="success" || (result.status >= 200 && result.status <300)){
          hash=result.data.posts[0].key;
        }
      }
    }catch (err){
      console.log(err);
      throw new Error(i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD);
    }
    if (hash==null){
      throw new Error(i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD);
    }
    return hash;
  };

  /**
   * @method getUserCreds 
   * @description return user hash. get it from cookie if not already loaded from there
   * @returns {string} user hash. null if none found.
   * @public
   */
  my.getUserCreds = function(){
    if (userHash == null && !cachedCredsLoaded){
      userHash = loadCreds();
    }
    my.updateLoginLogoutLinks();
    if (typeof userHash == "string"){
      userHash = parseInt(userHash, 10);
    }
    return userHash;
  };

  /**
   * @method resetCreds 
   * @description delete creds in memory and from cookie. Will force user to log in again at next
   * server call.
   * @modifies cookie unsets the cookie
   * @modifies navigation-links updates which links are on and off
   * @public
   */
  my.resetCreds = function(){
    userHash=null;
    setCookie("userHash", "");
    my.updateLoginLogoutLinks();
  }

  /**
   * @method checkCachedCreds 
   * @description This function should check whether the user hash stored in the cookie is still valid.
   * This should be done by making a call to a version of the login API that checks user hash. 
   * There is no server API right now to do this so I'm just going to return true for now.
   * @private
   * @returns {boolean} whether cached creds exist.
   */
  checkCachedCreds = function(){
    return (userHash && typeof userHash !== "undefined" && userHash.length>0)
  };
  
  /**
   * @method showLoginDialog 
   * @description Show a login dialog and obtain username/password from it
   * @return {Promise} a promise that resolves into username and password object {uname: username, password: password}
   * @public
   */
  my.showLoginDialog = function(errorMsg){
    if (qs("#dialogs-active #login")){//if dialog already exists, cancel old dialog
      let loginDlg=qs("#dialogs-active #login");
      loginDlg.fireCustomEvent("cancelled", {message: "Another dialog triggered."});
    }
    let dashboardNavLink = APP.nav.qs("#navItem-dashboard-nav-link").addClass("hidden");
    let dbConnectionNavGroup = APP.nav.qs("#navGroupItem-connection").addClass("hidden");
    let dataEngNavGroup = APP.nav.qs("#navGroupItem-data-engineering").addClass("hidden");
    let feNavGroup = APP.nav.qs("#navGroupItem-ae").addClass("hidden");
    let mpNavGroup = APP.nav.qs("#navGroupItem-mp").addClass("hidden");


    var loginDlg = null;
    if (errorMsg){
      loginDlg=createNode(loginTemplate({errorMsg: errorMsg}));
    } else {
      loginDlg=createNode(loginTemplate({errorMsg: ""}));
    }
    return new Promise((resolve, reject) => {
      qs("#dialogs-sleeping").appendChild(loginDlg);
      // APP.registerCompactLabel(loginDlg.qsa('label.compact'));
      APP.showDialog(loginDlg);
      let okAction=(evt)=>{
        if (evt.type.toLowerCase() == "keypress" && evt.key.toLowerCase() !== "enter"){
          return;
        }
        var username=loginDlg.qs("#input-username").value;
        var password=loginDlg.qs("#input-password").value;
        //TODO: do something about remember me too!
        APP.hideDialog(loginDlg);
        loginDlg.remove();
        resolve({uname: username, password: password});
      };
      loginDlg.qs("#login-button").addEventListener("click", okAction);
      loginDlg.addEventListener("keypress", okAction);
      loginDlg.addEventListener("cancelled", evt=>{
        loginDlg.remove();
        reject(`Cancelled. ${evt.detail.message}`);
      });
    });
  }

  /**
   * @method updateLoginLogoutLinks 
   * @description call after userHash has potentially been updated to update status 
   * of login/logout links in the main navigation
   * @public
   */
  my.updateLoginLogoutLinks = function(){
    if (userHash != null && typeof userHash != "undefined"){
      qs("#navItem-login-nav-link").addClass("hidden");
      qs("#navItem-logout-nav-link").removeClass("hidden");
    } else {
      qs("#navItem-logout-nav-link").addClass("hidden");
      qs("#navItem-login-nav-link").removeClass("hidden");
    }
  }
  return my; 
}(CREDENTIALS || {}));
;
/**
 * @module APP
 * @description Provides the application entrypoint and app level scope for 
 * methods that affect the whole application. This file contains helper functions to interact with the navigation, dialogs and 
 * the error indicator
 */

;APP=(function(my){
  /**
   * @method showNav 
   * @description makes DOM changes to cause the left-hand navigation to become visible. Nav will float on top of 
   * content until pinned.
   * @fires Event Fires a custom event with name "shown" on the #main-nav DOM nav element after the it has been set visible.
   * @public
   */
  my.showNav=function(){
    const nav=qs("#main-nav");
    const trigger=qs("#trigger-nav");
    const page=qs("#page-container");
    if (!nav || !trigger || !page || "undefined" === typeof nav || "undefined" === typeof trigger || "undefined" === typeof page) return;
    nav.addClass("on");
    trigger.addClass("on");
    page.addClass("nav-open");
    nav.setAttribute("aria-hidden", "false");
    nav.fireCustomEvent("shown");
  };

  /**
   * @method hideNav 
   * @description makes DOM changes to cause the left-hand navigation to be hidden. 
   * @fires Event Fires a custom event with name "hidden" on the #main-nav DOM nav element after the it has been hidden.
   * @public
   */
  my.hideNav=function(){
    const nav=qs("#main-nav");
    const trigger=qs("#trigger-nav");
    const page=qs("#page-container");
    if (!nav || !trigger || !page || "undefined" === typeof nav || "undefined" === typeof trigger || "undefined" === typeof page) return;  
    my.unpinNav();
    nav.removeClass("on");
    trigger.removeClass("on");
    page.removeClass("nav-open");
    nav.setAttribute("aria-hidden", "true");
    nav.fireCustomEvent("hidden");
  };

  /**
   * @method pinNav 
   * @description makes DOM changes to pin the left-hand navigation. This will change the layout
   * so that other content is moved to the right of the navigation. Causes navigation to be shown if not already shown.
   * @fires Event Fires a custom event with name "pinned" on the #main-nav DOM nav element after the it has been pinned.
   * @public
   */
  my.pinNav = function(){
    const nav=qs("#main-nav");
    const pin=qs("#pin-nav");
    const page=qs("#page-container");
    if (!nav || !pin || !page || "undefined" === typeof nav || "undefined" === typeof pin || "undefined" === typeof page) return;
    if (!nav.hasClass('on')) my.showNav();
    nav.addClass("pinned");
    pin.addClass("on");
    page.addClass("nav-pinned");
    nav.fireCustomEvent("pinned");
  };

  /**
   * @method unpinNav 
   * @description makes DOM changes to unpin the left-hand navigation. 
   * @fires Event Fires a custom event with name "unpinned" on the #main-nav DOM nav element after the it has been unpinned.
   * @public
   */
  my.unpinNav=function(){
    const nav=qs("#main-nav");
    const pin=qs("#pin-nav");
    const page=qs("#page-container");
    if (!nav || !pin || !page || "undefined" === typeof nav || "undefined" === typeof pin || "undefined" === typeof page) return;
    nav.removeClass("pinned");
    pin.removeClass("on");
    page.removeClass("nav-pinned");
    nav.fireCustomEvent("unpinned");
  };

  /**
   * @method showMask 
   * @description The mask is a body>div#mask that when active is position: absolute and covers the browser
   * window. the mask DOM object has a count of how many of each type of masks is currently "up". This prevents 
   * the situation where a dialog takes down a progress mask when it is hidden or vice versa.
   * @param {string} type A named type of mask. Current values being used is "progress" and "dialog". This 
   * prevents multiple masks from being shown if multiple setProgress() is called multiple times or multiple dialogs
   * are shown. 
   * @public
   */
  my.showMask=function(type){
    if (!type || typeof type === "undefined"){
      return;
    }
    const mask=qs("#mask");
    if (!mask.hasClass("on")){mask.addClass('on');}
    if (typeof mask.dataset.maskUsers === "undefined" || mask.dataset.maskUsers == null){mask.dataset.maskUsers = "";}
    let maskUsers=mask.dataset.maskUsers.split(",");
    if (maskUsers.indexOf(type)<0){
      maskUsers.push(type);
      maskUsers=maskUsers.filter(x=>x.length>0);
      mask.addClass(type);
    }
    mask.dataset.maskUsers=maskUsers.filter(x=>x.length>0).join(",");
  }

  /**
   * @method hideMask 
   * @description hide a named mask.
   * @param {string} type A named type of mask. Current values being used is "progress" and "dialog". This 
   * prevents multiple masks from being shown if multiple setProgress() is called multiple times or multiple dialogs
   * are shown.
   * @public
   */
  my.hideMask=function(type){
    const mask=qs("#mask");
    if (typeof mask.dataset.maskUsers === "undefined" || mask.dataset.maskUsers == null){mask.dataset.maskUsers = "";}
    let maskUsers=mask.dataset.maskUsers.split(",");
    if (!type || typeof type === "undefined"){
      maskUsers.forEach(x=>my.hideMask(x));
      return;
    }
    if (maskUsers.indexOf(type)>=0){
      mask.removeClass(type);
      delete maskUsers[maskUsers.indexOf(type)];
      maskUsers=maskUsers.filter(x=>x.length>0);
      if (maskUsers.length === 0){
        mask.removeClass("on");
      }
      mask.dataset.maskUsers=maskUsers.join(",");
    }
  }

  /**
   * @method showDialog 
   * @description Causes a modal dialog object to be shown. ALso will throw up the page mask behind the dialog
   * @param {HTMLElement} dlg An HTMLDialogElement or a HTMLDivElement with class .box.
   * @public
   */
  my.showDialog=function(dlg){
    const activeDialogsContainer=qs("#dialogs-active");
    if (!dlg || !mask || !activeDialogsContainer || "undefined" === typeof dlg || "undefined" === typeof mask || "undefined" === typeof activeDialogsContainer) return;
    my.showMask("dialog");
    activeDialogsContainer.appendChild(dlg);
    activeDialogsContainer.addClass("on");
    activeDialogsContainer.setAttribute("current-dialog", dlg.id);
    if (dlg.show) dlg.show();
  };

  /**
   * @method hideDialog 
   * @description Hides then deletes a dialog/box element from the DOM. If it is a HTMLDialogElement DOM method dialog.hide() will be called on it.
   * @param {HTMLElement} dlg An HTMLDialogElement or a HTMLDivElement with class .box. 
   * @returns {HTMLElement} hidden dialog or box
   * @public
   */
  my.hideDialog=function(dlg){
    const sleepingDialogsContainer=qs("#dialogs-sleeping");
    const activeDialogsContainer=qs("#dialogs-active");
    if (!dlg || !mask || !sleepingDialogsContainer || !activeDialogsContainer || "undefined" === typeof dlg || "undefined" === typeof mask || "undefined" === typeof sleepingDialogsContainer || "undefined" === typeof activeDialogsContainer) return;
    my.hideMask("dialog");
    activeDialogsContainer.removeClass("on");
    activeDialogsContainer.removeAttribute("current-dialog");
    sleepingDialogsContainer.appendChild(dlg);
    if (dlg.hide) dlg.hide();
    return dlg;
  };

  /**
   * @method showCriticalError 
   * @description Shows an critical error message in the global message location
   * @param {string} message The critical error message to be shown
   * @public
   */
  my.showCriticalError=function(message){showGlobalMessage(message, "critical");}

  /**
   * @method showError 
   * @description Shows an error message in the global message location
   * @param {string} message The error message to be shown
   * @public
   */
  my.showError=function(message){showGlobalMessage(message, "error");}

  /**
   * @method showInfo 
   * @description Shows an info message in the global message location
   * @param {string} message The info message to be shown
   * @public
   */
  my.showInfo=function(message){showGlobalMessage(message, "info");}

  /**
   * @method showWarning 
   * @description Shows an warning message in the global message location
   * @param {string} message The warning message to be shown
   * @public
   */
  my.showWarning=function(message){showGlobalMessage(message, "warning");}
  
  /**
   * @method showGlobalMessage 
   * @description Activates a global message just below the breadcrumb
   * @param {string} message the message to be shown in the message bar
   * @param {string} type one of "critical", "error", "warning", or "info"
   * @private
   */
  showGlobalMessage=function(message, type){
    const msgBar=qs("#messageBar");
    if (!message || !msgBar || "undefined" === typeof message || "undefined" === typeof msgBar) return;
    msgBar.removeClass("critical,error,warning,info");
    msgBar.addClass(type);
    msgBar.qs(".content").innerHTML=message;
  };


  /**
   * @method dismissMessage 
   * @description Removes currently shown message in the error bar.
   * @public
   */
  my.dismissMessage=function(){
    const msgBar=qs("#messageBar");
    if (!msgBar || "undefined" === typeof msgBar) return;
    msgBar.removeClass("critical,error,warning,info");
    msgBar.qs(".content").innerHTML="";
  };

  /**
   * @method setProgress 
   * @description Show the progress animation with text
   * @param {string} text Progress bar text
   * @public
   */
  my.setProgress=function(text, showMask){
    if (showMask==null || typeof showMask == "undefined"){showMask=true;}
    if (showMask){
      my.showMask("progress");
    }
    
    qs("#footer #progress-message").innerText=text;
    qs("#footer #progress").addClass("on");
  };

  /**
   * @method resetProgress 
   * @description Hide the progress animation and reset the text.
   * @public
   */
  my.resetProgress=function(){
    my.hideMask("progress");
    qs("#footer #progress-message").innerText="";
    qs("#footer #progress").removeClass("on");
  };

  /**
   * @method resetCurrentPageMarker 
   * @description removes the attribute that identifies the content of the current page.
   * Used in showing the correct watermark on the page.
   * @public
   */
  my.resetCurrentPageMarker=function(){
    qs("#main-content").removeAttribute("current-page-marker");
  };

  /**
   * @method setCurrentPageMarker 
   * @description sets the attribute that identifies the content of the current page.
   * Used in showing the correct watermark on the page.
   * @param name identifier for the current page
   * @public
   */
  my.setCurrentPageMarker=function(name){
    if (!name || typeof name == "undefined"){
      name = my.getCurrentPageMarkerString();
    }
    qs("#main-content").setAttribute("current-page-marker", name);
  };

  /**
   * @method getCurrentPageMarkerString 
   * @description creates an ID by replacing the / in the URL by _ and then taking the
   * first token. Some special cases also exist because these are dialog destinations and don't have their own
   * URLs.
   * @return {string} a unique ID for the current page, the foo in https://server/#/foo/bar
   * @public
   */
  my.getCurrentPageMarkerString=function(){
    let link=my.getCurrentPageLinkNode();
    if (!link){
      if (STORE.here.includes("/new-project")) {return "new-project";}
      else if (STORE.here.includes("/workflow-start")) {return "workflow-start";}
    }
    let name = my.getCurrentPageLinkNode().getAttribute("to").replace(/\//g, '_');
    if (name.startsWith("_")){name=name.slice(1);}
    if (name.length==0){name="dashboard";}
    return name;
  }

  /**
   * @method getCurrentPageLinkNode 
   * @description Find the link in the left nav corresponding to the current page
   * @return {Element} DOM node corresponding to the anchor tag with the href pointing to the current page
   * @public
   */
  my.getCurrentPageLinkNode=function(){
    let nav=qs("#main-nav");
    // nav.qsa(".selected").forEach(x=>x.removeClass("selected"));
    let link=null;
    //dashboard link / will match anything so treat it separately.
    let linksList=nav.innerHTML.match(/to="([\/\w\d\-]*)"/g).map(x=>x.split('"')[1]).slice(1);
    if (STORE.here == "/"){
      link=nav.qs("#dashboard-nav-link");
    } else {
      for (let i=linksList.length-1;i>=0;i--){
        if (STORE.here.startsWith(linksList[i])){
          link=nav.qs(`[to^='${linksList[i]}']`);
          break;
        }
      }
    }
    return link;
  };

  /**
   * @method getCurrentPageEndToken 
   * @description In pages with subsections we sometimes have generalized ways of doing 
   * things (handling graphs for example) but need to use the name of the section as a key in look up maps 
   * The page URL has a convenient way of getting this ID as the last token in the URL path.
   * @return {string} returns bar from https://server/#/foo/bar
   * @public
   */
  my.getCurrentPageEndToken=function(){
    let link=my.getCurrentPageLinkNode();
    if (link){
      let to=link.getAttribute('to');
      to=to.split("/");
      return to[to.length-1];
    }
    return "";
  };

  /**
   * @method noop 
   * @description an empty function.
   */
  my.noop=function(){};
  return my;
}(APP || {}));
;
/**
 * @module APP
 * @description Provides the application entrypoint and app level scope for 
 * methods that affect the whole application. This file contains event listeners that 
 * for the main menu trigger, dismisser, and helper listener for compactLabel
 */
;APP=(function(my){

  /**
   * @method menuTrigger 
   * @description click eventListner that checks and opens and closes the left-side nav
   * @param evt click event
   * @private
   */
  var menuTrigger=function(evt){
    const nav=qs("#main-nav");
    if ("trigger-nav"===evt.currentTarget.id){
      if (nav.hasClass("on")){
        APP.hideNav(); 
      } else {
        APP.showNav();
      }
    } else if ("close-nav"===evt.currentTarget.id){
      const nav=qs("#main-nav");
      if (nav.hasClass("pinned")) return;
      APP.hideNav();
    } else if ("pin-nav"===evt.currentTarget.id){
      const nav=qs("#main-nav");
      if (nav && typeof nav !== "undefined"){
        if (nav.hasClass("pinned")){
          APP.unpinNav();
        } else {
          APP.pinNav();
        }
      }
    }
  };

  /**
   * @method maskClicked 
   * @description eventListener that is triggered when the mask is clicked. closes the navigation if it open and unpinned
   * @param evt click event
   * @private
   */
  var maskClicked=function(evt){
    const page=qs("#page-container");
    if (page.hasClass("nav-open")){
      APP.hideNav();
    }
  };

  /**
   * @method pinnedStatusChanged 
   * @description eventListener that is triggered for custom event that's fired when the nav is pinned. Stores pinned status as a cookie for later retrieval.
   * @param evt custom event from APP.pinNav and APP.unpinNav
   * @private
   */
  var pinnedStatusChanged=function(evt){
    setCookie("navPinned", evt.type);
  };

  /**
   * @method navigationUpdater 
   * @description Highlight the current links and groups in the navigation.
   * @public
   */
  my.navigationUpdater=function(){
    let nav=qs("#main-nav");
    nav.qsa(".selected").forEach(x=>x.removeClass("selected"));
    let link=null;
    //dashboard link / will match anything so treat it separately.
    let linksList=nav.innerHTML.match(/to="([\/\w\d\-]*)"/g).map(x=>x.split('"')[1]).slice(1);
    if (STORE.here == "/"){
      link=nav.qs("#dashboard-nav-link");
    } else {
      for (let i=linksList.length-1;i>=0;i--){
        if (STORE.here.startsWith(linksList[i])){
          link=nav.qs(`[to^='${linksList[i]}']`);
          break;
        }
      }
    }
    if (link){
      link.addClass("selected");
      let containerTextNode=link.closest(".nav-group-container.l1");
      if (containerTextNode){
        children(containerTextNode, ".group-text").forEach(x=>x.addClass("selected"));
        // containerTextNode.qsa(".group-text").forEach(x=>x.addClass("selected"));
      }
      containerTextNode=link.closest(".nav-group-container.l2");
      if (containerTextNode){
        children(containerTextNode, ".group-text").forEach(x=>x.addClass("selected"));
        // containerTextNode.qsa(".group-text").forEach(x=>x.addClass("selected"));
      }
    }
  }

  /**
   * @method createProject 
   * @description click event listener for the New Project button.
   * @private
   */
  var createProject=function(evt){
    APP.router.navigate("/new-project");
  };

  /**
   * @method registerUIListeners 
   * @description registers the listeners in this file on appropriate elements on the page.
   * Also registers a mutation observer for new dialogs or boxes and registers the compactLabels inside.
   * @public
   */
  my.registerUIListeners=function(){
    //nav controls
    [].forEach.call(qsa(".nav-control"), function(button){
      button.addEventListener("click", menuTrigger);
    });
    
    //register for clicks on the mask; close nav on mask click
    qs("#mask").addEventListener("click", maskClicked);
  
    // set/unset cookie on nav pin/unpin
    qs("#main-nav").addEventListener("pinned", pinnedStatusChanged);
    qs("#main-nav").addEventListener("unpinned", pinnedStatusChanged);

    //create new project from dashboard
    qs("#createProject").addEventListener("click", createProject);

    qs("#messageBar .close").addEventListener("click", APP.dismissMessage);
  
    //observe for new dialogs and register compactLabels therein for input content listeners
    var dlgObserver=new MutationObserver(mutationsList=>{
      for (var mutation of mutationsList){
        if (mutation.type=='childList'){
          for (var dlg of mutation.addedNodes){
            COMPACT_LABEL.registerCompactLabel(dlg.qsa("label.compact"));
          }
        }
      }
    });
    dlgObserver.observe(qs("#dialogs-active"), {attributes: false, childList: true});
  };
  
  return my;
}(APP || {}));





;
/**
 * @module SERVER
 * @description This will have functions that assist with making AJAX CRUD calls to the app server
 */
var SERVER=(function(my){

  /**
   * @var baseAddress The base address for the app server
   * @private
   */
  baseAddress = (window.server && typeof server !== "undefined")?server:"http://35.187.237.235:9000/automl/v1/apis/";

  /**
   * @method getBaseAddress
   * @description getter for [baseAddress](#~baseAddress)
   * @returns {string} `[baseAddress](#~baseAddress)`
   */
  my.getBaseAddress=function(){
    return baseAddress;
  }

  /**
   * @method postData 
   * @description Calls server with HTTP/POST at specified URL and sends specified data. 
   * Assumes JSON is returned. Parse whatever is returned from server into a javascript object.
   * @param {string} url Complete url for the server API
   * @param {Object} data The data that gets JSON.stringify'ed and sent to the server as api parameters
   * @returns {Promise} A promise that resolves into a javascript object with return values or rejected on error.
   * @public 
   */
  my.postData=function(url, data) {
    // Default options are marked with *
    return fetch(window.proxy, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json',
        'X-Proxy-URL': url
        // 'Authorization': 'Basic amit:amit'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()); // parses response to JSON
  };

  /**
   * @method getData 
   * @description Calls server with HTTP/GET at specified URL with params provided. The params are stringified
   * and sent as URL parameters
   * @param {string} urlstring target URL
   * @param {object} params key-value pairs to be sent as parameters.
   * @return {Promise} A promise, that resolves to a JS object that corresponds to the JSON returned by the server.
   * @public
   */
  my.getData=function(urlstring, params){
    var url = new URL(urlstring);
    Object.keys(params).forEach(key=>url.searchParams.append(key, params[key]));
    return fetch(url, {
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json',
        // 'Authorization': 'Basic amit:amit'
      },
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json());
  }

  return my;
}(SERVER || {}));
;
/**
 * @module STORE 
 * @description A data store. All system wide data will be stored in the store. Has facility to 
 * set observers on data in the store so that subsystems may be informed of data changes.
 */
var STORE=(function(my){
  /**
   * @var {object} _observers 
   * @description stores observers in a map by name and observer id
   */
  var _observers={};

  /**
   * @var {number} _observerCounter 
   * @description an incremental counter that is incremented after each call to addObserver. 
   */
  var _observerCounter=0;

  /**
   * @method addObserver 
   * @description add an observer for a property stored in the STORE
   * @param {string} name - name of the store property that you want to observe
   * @param {STORE-addObserverCallback} f - The observer callback that is called when the property specified by name changes.
   * @return {Number} An identifying number that can be used to remove this observer at a later point.
   * @public
   */
  my.addObserver=function(name, f){
    if (!_observers[name] || "undefined" == _observers[name]){
      _observers[name]={};
    }
    _observers[name][""+_observerCounter] = f;
    return (++_observerCounter-1);
  };
  /**
   * This callback is called when the property for which the observer is added changes
   * @callback STORE-addObserverCallback
   * @param {Object} p property that changed
   */

  /**
   * @method removeObserver 
   * @description remove an observer for a property stored in the STORE
   * @param {string} name name of the property
   * @param {Number} id id of the observer callback that was registered using addObserver.
   * @return {function} The callback function that was registerd as an observer
   * @public
   */
  my.removeObserver=function(name, id){
    if (!_observers[name] || "undefined" == _observers[name]){
      return null;
    }
    if (!_observers[name][id] || "undefined" == _observers[name][id]){
      return null;
    }
    f=_observers[name][id];
    delete _observers[name][id];
    return f;
  }

  /**
   * @var {object[]} _projects 
   * @description the underlying property that stores an array of projects obtained from the server.
   * @private
   */
  var _projects=null;

  /**
   * @member {object} projects 
   * @description getters and setters for the underlying _projects. The setter calls all the observers looking at this property.
   */
  Object.defineProperty(my, 'projects', { 
    get: function(){return _projects;},
    set: function(p){
      _projects=p; 
      if (!_observers.projects || typeof _observers.projects == "undefined"){return;}
      for (var x in _observers.projects){_observers.projects[x](p);}
    } 
  });

  /**
   * @member {string} here 
   * @description the current location in the application, based on the window.location.hash. No setter. use APP.router.navigate to set the location.
   */
  Object.defineProperty(my, 'here', {
    get: function(){
      var hash=window.location.hash;
      if (hash.startsWith("#/")){
        hash=hash.substr(2);
      } else if (hash.startsWith("#")){
        hash=hash.substr(1);
      }
      if (hash === ""){
        hash='/';
      }
      return hash.startsWith("/")?hash:"/"+hash;
    }
  });

  /**
   * @member {object} _projectStuff
   * @description storage object for storing the data and metadata for various pages in the UI.
   * TODO: This should be made private at some point.
   * @public
   */
  my._projectStuff={};

  /**
   * @method setProjectData
   * @description Store some data in the store. 
   * @param {string} projectID project context
   * @param {string} dataKey lookup key
   * @param {object} data data to be stored
   * @return {object} The `data` parameter that was passed to the method.
   * @public
   */
  my.setProjectData=function(projectID, dataKey, data){
    if (!Object.keys(my._projectStuff).includes(projectID)){
      my._projectStuff[projectID]={}
      my._projectStuff[projectID].data={};
      my._projectStuff[projectID].metadata={};
    }
    my._projectStuff[projectID].data[dataKey]=data;
    return data;
  }

  /**
   * @method setProjectMetadata
   * @description Store some data in the store. The difference from [`setProjectData`](#~setProjectData) is one of semantics.
   * @param {string} projectID project context
   * @param {string} dataKey lookup key
   * @param {object} data data to be stored
   * @return {object} The `data` parameter that was passed to the method.
   * @public
   */
  my.setProjectMetadata=function(projectID, metaKey, metadata){
    if (!Object.keys(my._projectStuff).includes(projectID)){
      my._projectStuff[projectID]={}
      my._projectStuff[projectID].data={};
      my._projectStuff[projectID].metadata={};
    }
    my._projectStuff[projectID].metadata[metaKey]=metadata;
  }

  /**
   * @method getProjectData
   * @description Correspoinding getter for [`setProjectData`](#~setProjectData). Returns `false` if either project or 
   * key doesn't exist.
   * @param {string} projectID project context
   * @param {string} dataKey lookup key
   * @return {object} The data object that was previously stored using [`setProjectData`](#~setProjectData). 
   * Returns `false` if either project or key doesn't exist.
   * @public
   */
  my.getProjectData=function(projectID, dataKey){
    if (!Object.keys(my._projectStuff).includes(projectID)){
      return false;
    }
    if (!Object.keys(my._projectStuff[projectID].data).includes(dataKey)){
      return false
    }
    return my._projectStuff[projectID].data[dataKey];
  }

  /**
   * @method getProjectMetadata
   * @description Correspoinding getter for [`setProjectMetadata`](#~setProjectMetadata). Returns `false` if either project or 
   * key doesn't exist.
   * @param {string} projectID project context
   * @param {string} dataKey lookup key
   * @return {object} The data object that was previously stored using [`setProjectMetadata`](#~setProjectMetadata). 
   * Returns `false` if either project or key doesn't exist.
   * @public
   */
  my.getProjectMetadata=function(projectID, metaKey){
    if (!Object.keys(my._projectStuff).includes(projectID)){
      return false;
    }
    if (!Object.keys(my._projectStuff[projectID].metadata).includes(metaKey)){
      return false
    }
    return my._projectStuff[projectID].metadata[metaKey];
  }

  /**
   * @method purge
   * @description Empty all data.
   * @public
   */
  my.purge=function(){
    my._projectStuff={};
  }

  return my;
}(STORE || {}));
;
/**
 * @module DASHBOARD
 * @description The Dashboard page at "#/". Loads list of projects from the "projects/all" API
 * and renders them as boxes on the page. Also has code for the "Workflow Start" page.
 */
var DASHBOARD = (function(my, g){

  /**
   * @member {array} array of projects that was returned by the projects/all API.
   * @public
   */
  my.projects = null;

  /**
   * @member {boolean} inited flag to indicate whether the dashboard's init() method has been called yet
   * @private
   */
  var inited = false;

  /**
   * @member {number} id returned by STORE.addObserver from when the dashboard registers to 
   * listen for project list changes
   * @private
   */
  var projectsObserver=null;

  /**
   * @method load 
   * @description removes current project context and then loads the dashboard with projects
   * @throws {Error} Throws an error in case of a server error or if the userHash is not obtainable
   * from the projects/all API.
   * @async
   * @public
   */
  my.load = async function(){
    PROJECT.cleanUp();
    init();
    let projects=null;
    let result=null;
    try{
      result = await getAllProjects().then(response=>{projects=response;});
    } catch (err){
      console.log(err);
      APP.router.navigate("/logout");
      return;
    }
    var projectObjTemplate={
      projectkey: "##ID##",
      createdOn: "##CREATED_ON##",
      pname: "##pname##",
      NoModels: "##NoModels##",
      platform: "##platform##",
      ptype: "##ptype##"
    }
    var plist=[];
    projects.forEach(project=>plist.push(extend(projectObjTemplate, project)));
    STORE.projects=projects;
  };

  /**
   * @method unload 
   * @description cleanup method to remove the dashboard view from the UI
   * @throws {Error} Throws an error in case of a server error or if the userHash is not obtainable.
   * @async
   * @public
   */
  my.unload = function(){
    if (!my.inited) return;
    STORE.removeObserver("projects", projectsObserver);
    projectsObserver = null;
    my.inited = false;
    qs("#main-content").classList.remove("dashboard");
    qs("#main-content .dashboardContent").innerHTML="";
  }

  /** 
   * @method renderProjects 
   * @description render all the project boxes
   * @throws {Error} Throws an error in case of a server error or if the userHash is not obtainable.
   * @param {array} projects list of all project data items obtained from projects/all API
   * @async
   * @public
   */
  my.renderProjects = function(projects){
    qs("#main-content .dashboardContent").innerHTML="";
    projects.forEach(project => {
      let projectNode=createNode(projectTemplate(project));
      qs("#main-content .dashboardContent").appendChild(projectNode);
      projectNode.qs("button.exploreProject").addEventListener("click", evt=>{
        APP.router.navigate(evt.currentTarget.getAttribute("target"));
      });
    });
    let dashboardNavLink = APP.nav.qs("#navItem-dashboard-nav-link").removeClass("hidden");
  }

  /** 
   * @method init 
   * @description if not previously inited, load all the projects into the dashboard and listen
   * for changes to the project list
   * @throws {Error} Throws an error in case of a server error or if the userHash is not obtainable
   * @async
   * @private
   */
  var init=function(){
    if (inited) return;
    qs("#main-content").classList.add("dashboard");
    projectsObserver=STORE.addObserver("projects", my.renderProjects);
    my.inited=true;
  }

  /**
   * @method getAllProjects 
   * @description get a list of all projects from the server by calling the projects/all API
   * @throws {Error} Throws an error in case of a server error or if the userHash is not obtainable.
   * @async
   * @public
   */
  getAllProjects=async function(){
    let url=SERVER.getBaseAddress() + 'projects/all';
    let userHash=CREDENTIALS.getUserCreds();
    APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.GET_ALL_PROJECTS);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS);
    }
    let params={"key": userHash};
    var result=null;
    var projects=null;
    try{
      if (useTestData){
        result=await DASHBOARD_DATA.getData(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
      APP.resetProgress();
    } catch (err) {
      result=null;
      APP.resetProgress();
    }
    try{
      if (result!=null){
        if (result.status==="success" || (result.status >= 200 && result.status <300)){
          projects=result.data.posts;
        }
      }
    }catch (err){
      console.log(err);
      throw new Error(i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL);
    }
    if (projects==null){
      throw new Error(i18n.en.APP.UI.ERROR.PROJECT_RETRIEVAL);
    }
    return projects;
  };

  /**
   * @method workflowStart 
   * @description Once a new project has been created and its data source connected,
   * this method is called to show the page with the workflow start graphic. 
   * @throws {Error} Throws an error in case of a server error or if the userHash is not obtainable.
   * @async
   * @param {string} projectKey The ID of the project that was just created.
   * @public
   */
  my.workflowStart=function(projectKey){
    my.unload();
    APP.showInfo("DB connection created successfully.");

    projectKey=projectKey?projectKey:PROJECT.currentProjectKey();
    workflowStartAction=function(){
      qs("#main-content .workflow-start button#workflow-start").removeEventListener("click", workflowStartAction);
      if (STORE.getProjectMetadata(projectKey, VALIDATE_FEATURES.STORE_KEY+"_features_saved")===true){
        APP.router.navigate(`/explore-data/${projectKey}`);
      }else{
        APP.router.navigate(`/validate-features/${projectKey}`);
      }
    };
    qs("#main-content .workflow-start button#workflow-start").addEventListener("click", workflowStartAction);
  }

  return my; 
}(DASHBOARD || {}, APP));;
/**
 * @module APP
 * @description Provides the application entrypoint and app level scope for 
 * methods that affect the whole application. This file contains helper functions to interact with the navigation, dialogs and 
 * the error indicator
 */

;APP=(function(my){
  /**
   * @member {Navigo} router 
   * @description can be used to trigger app level navigation using APP.router.navigate("<route>")
   * uses the navigo.js router.
   * @public
   */
  my.router=new Navigo(null, true);

  /**
   * @member {Element} nav 
   * @description a global reference to the global left navigation. Can be accessed throughout the 
   * UI code as APP.nav
   * @public
   */
  my.nav=qs("#main-nav");

  /**
   * @method initRoutes 
   * @description Initialize all the routes for the application. Uses the navigo.js router. 
   * Also adds a hook to hide the global progressbar on route change.
   * @public
   */
  my.initRoutes=function(){
    /**
     * DASHBOARD
     * PUG: index.pug, project.pug
     * JS: dashboard.js, test/projects-test-data.js
     * MODULE: DASHBOARD
     * SCSS: _dashboard.scss
     */
    my.router.on('/', function(){ //GO TO DASHBOARD
      creds=CREDENTIALS.getUserCreds();
      if (null == creds){
        my.router.navigate('/login');
      } else {
        DASHBOARD.load();
      }
    });

    /**
     * LOGIN
     * PUG: includes/login.pug, templates/login.pug
     * JS: credentials.js, test/credentials-test-data.js
     * MODULE: CREDENTIALS
     * SCSS: _login.scss
     */
    my.router.on('/login', async function(){ //SHOW LOGIN DIALOG
      let creds=null, result=null, isError=false;
      while (result == null) {
        try {
          creds=await CREDENTIALS.showLoginDialog(isError?i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD:"");
        } catch(err) {
          console.log(err);
          return;
        }
        my.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.LOGIN);
        try {
          result=await CREDENTIALS.obtainCreds(creds.uname, creds.password);
          console.log(result);
        } catch(err) {
          console.log(err);
          my.resetProgress();
          isError=true;
          APP.showError(i18n.en.APP.UI.ERROR.INCORRECT_USERNAME_OR_PASSWORD);
        }
      }
      my.router.navigate('/');
    });

    /**
     * LOGOUT
     * PUG: n/a
     * JS: credentials.js
     * MODULE: CREDENTIALS
     * SCSS: n/a
     */
    my.router.on('/logout', function(){
      CREDENTIALS.resetCreds();
      DASHBOARD.unload();
      my.router.navigate("/");
    });

    /**
     * NEW PROJECT DIALOG
     * PUG: templates/createProject.pug
     * JS: project.js, project-test-data.js
     * MODULE: PROJECT
     * SCSS: project.scss
     */
    my.router.on('/new-project', PROJECT.createProject);

    /**
     * NEW DB CONNECTION DIALOG
     * PUG: templates/dbConnection.pug
     * JS: db-connection.js, test/db-connection-test-data.js
     * MODULE: DB_CONNECTION
     * SCSS: _db-connection.scss
     */
    my.router.on('/db-connection/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      FILE_UPLOAD.hideDialog();
      DB_CONNECTION.dbConnection(pkey);
    }).on('/db-connection', function(){APP.router.navigate(`/db-connection/${PROJECT.currentProjectKey()}`)});

    /**
     * FILE UPLOAD DIALOG
     * PUG: templates/fileUpload.pug
     * JS: file-upload.js, test/file-upload-test-data.js
     * MODULE: FILE_UPLOAD
     * SCSS: _file-upload.scss
     */
    my.router.on('/file-upload/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      DB_CONNECTION.hideDialog();
      FILE_UPLOAD.fileUpload(pkey);
    }).on('/file-upload', function(){APP.router.navigate(`/file-upload/${PROJECT.currentProjectKey()}`)});

    /**
     * VALIDATE FEATURES PAGE
     * PUG: index.pug, templates/table.pug
     * JS: validate-features.js, test/validate-features-test-data.js
     * MODULE: VALIDATE_FEATURES
     * SCSS: _validate-features.scss
     */
    my.router.on('/validate-features/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      VALIDATE_FEATURES.validateFeatures(pkey);
    }).on('/validate-features', function(){APP.router.navigate(`/validate-features/${PROJECT.currentProjectKey()}`)});

    /**
     * EXPLORE DATA PAGE
     * PUG: index.pug, templates/table.pug
     * JS: explore-data.js, test/explore-data-test-data.js
     * MODULE: EXPLORE_DATA
     * SCSS: _explore-data.scss
     */
    my.router.on('/explore-data/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      EXPLORE_DATA.exploreData(pkey);
    }).on('/explore-data', function(){APP.router.navigate(`/explore-data/${PROJECT.currentProjectKey()}`)});

    /**
     * WORKFLOW START PAGE
     * PUG: index.pug
     * JS: dashboard.js
     * MODULE: n/a
     * SCSS: _workflow-start.scss
     */
    my.router.on('/workflow-start/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      DASHBOARD.workflowStart(pkey);
    }).on('/workflow-start', function(){APP.router.navigate(`/workflow-start/${PROJECT.currentProjectKey()}`)});

    /**
     * MODEL DEVELOPMENT PAGE
     * PUG: templates/AEAutoModel.pug, templates/dataTreatment.pug, templates/featureEngineering.pug, templates/modelDevelpment.pug, templates/modelDevConfirmationDLG.pug
     * JS: ae-automodel.js, test/model-dev-report-data.js
     * MODULE: AE_AUTOMODEL
     * SCSS: _ae-automodel.scss
     */
    my.router.on('/ae-automodel/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      if (STORE.getProjectMetadata(PROJECT.currentProjectKey(), AE_AUTOMODEL.STORE_KEY+"_modeldev_complete")){
        APP.router.navigate(`/mp/mll/discrimination/${pkey}`);
      } else {
        AE_AUTOMODEL.showAutoModel(pkey);
      }
    }).on('/ae-automodel', function(){APP.router.navigate(`/ae-automodel/${PROJECT.currentProjectKey()}`)});

    /**
     * MACHINE LEARNING LEADERBOARD PAGE with DISCRIMINATION, CALIBRATION, and FPR and PRECISION ANALYSIS SUBPAGES
     * PUG: templates/MPMLLeaderboard.pug, templates/probLevelsTable.pug
     * JS: ml-leaderboard.js, test/model-performance-test-data.js
     * MODULE: ML_LEADERBOARD
     * SCSS: _ml-leaderboard.scss
     */
    my.router.on('/mp/mll/:subnav/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      let subnav=params.subnav;
      ML_LEADERBOARD.show(subnav, pkey);
      console.log(subnav);
    }).on('/mp', function(){APP.router.navigate(`/mp/mll/discrimination/${PROJECT.currentProjectKey()}`)})
      .on('/mp/mll', function(){APP.router.navigate(`/mp/mll/discrimination/${PROJECT.currentProjectKey()}`)})
      .on('/mp/mll/:subnav', function(params){APP.router.navigate(`/mp/mll/${params.subnav}/${PROJECT.currentProjectKey()}`)});
    
    /**
     * MODEL COMPARISON PAGE
     * PUG: templates/MPModelComparison.pug
     * JS: mp-model-comparison.js, test/model-comparison-test-data.js
     * MODULE: MP_MODEL_COMPARISON
     * SCSS: _mp-model-comparison.scss
     */
    my.router.on('mp/model-comparison/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      MP_MODEL_COMPARISON.show(pkey);
    }).on('/mp/model-comparison', function(){APP.router.navigate(`/mp/model-comparison/${PROJECT.currentProjectKey()}`)});

    /**
     * AUTO CODE GENERATOR PAGE
     * PUG: templates/MDAutoCodeGenerator.pug
     * JS: md-auto-code.js, test/model-comparison-test-data.js
     * MODULE: AUTO_CODE
     * SCSS: _md-auto-code.js
     */
    my.router.on('/md/auto-code/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      AUTO_CODE.show(pkey);

    }).on('/md/auto-code', function(){APP.router.navigate(`/md/auto-code/${PROJECT.currentProjectKey()}`)});

    /**
     * MODEL SCORING PAGE
     * PUG: templates/MDScoreModels.pug
     * JS: md-score-models.js, test/md-score-models-test-data.js
     * MODULE: SCORE_MODELS
     * SCSS: _md-score-models.scss
     */
    my.router.on('/md/score-models/:pkey', function(params){
      let pkey=params.pkey;
      if (!pkey){
        pkey=PROJECT.currentProjectKey();
      } else {
        PROJECT.setCurrentProjectKey(pkey);
      }
      SCORE_MODELS.show(pkey);

    }).on('/md/score-models', function(){APP.router.navigate(`/md/score-models/${PROJECT.currentProjectKey()}`)});
    
    my.router.hooks({
      before: function(done, params){
        my.resetProgress();
        if (!qs("#main-nav").hasClass("pinned")) my.hideNav();
        done();
      },
      after: function(params){
        my.setCurrentPageMarker();
        my.navigationUpdater();
        my.updateNavigationVisibility();
        my.dismissMessage();
        let activeNav=qs("#main-nav a.selected")
        if ((activeNav) && !activeNav.id.includes("ae-automodel")){
          AE_AUTOMODEL.unload();
        }
        if ((activeNav) && !activeNav.id.includes("mp-mll")){
          ML_LEADERBOARD.unload();
        }
        if ((activeNav) && !activeNav.id.includes("score-models")){
          SCORE_MODELS.cancelPolling();
        }
      },
      leave: my.resetCurrentPageMarker
    })
  };

  /**
   * @method updateNavigationVisibility 
   * @description Based on the current state of the UI, various links in the left 
   * navigation are cherry-picked to be enabled or disabled. This is where it happens. This method looks
   * at the URL (actually the pageMarkerString) and enables and disables specific links in the left nav.
   * @public
   */
  my.updateNavigationVisibility=function(){
    let name=my.getCurrentPageMarkerString();
    let link=my.getCurrentPageLinkNode();
    let nav=qs("#main-nav");
    nav.qsa(".disabled").forEach(x=>x.removeClass("disabled"));
    nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering, #navItem-explore-data-nav-link, #navGroupItem-ae, #navGroupItem-mp, #navGroupItem-md, #navItem-auto-code-nav-link, #navItem-score-models-nav-link").forEach(x=>x.addClass("hidden"));
    if (name.includes("dashboard")){
      nav.qsa("#navItem-dashboard-nav-link").forEach(x=>x.removeClass("hidden"));
    } else if (name.includes("connection") || name.includes("upload")){
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection").forEach(x=>x.removeClass("hidden"));
    } else if (name.includes("validate-features") || name.includes("workflow-start")) {
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering").forEach(x=>x.removeClass("hidden"));
    } else if (name.includes("explore-data")){
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering, #navItem-explore-data-nav-link, #navGroupItem-ae").forEach(x=>x.removeClass("hidden"));
      nav.qs("#navItem-db-connection-nav-link").addClass("disabled");
      nav.qs("#navItem-file-upload-nav-link").addClass("disabled");
      nav.qs("#navItem-validate-features-nav-link").addClass("disabled");
    } else if (name.includes("ae")){
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering, #navItem-explore-data-nav-link, #navGroupItem-ae").forEach(x=>x.removeClass("hidden"));
      nav.qs("#navItem-db-connection-nav-link").addClass("disabled");
      nav.qs("#navItem-file-upload-nav-link").addClass("disabled");
      nav.qs("#navItem-validate-features-nav-link").addClass("disabled");
      if (STORE.getProjectData(PROJECT.currentProjectKey(), EXPLORE_DATA.STORE_KEY) === false){
        nav.qs("#navItem-explore-data-nav-link").addClass("disabled");
      }
    } else if (name.includes("mp")){
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering, #navItem-explore-data-nav-link, #navGroupItem-ae, #navGroupItem-mp, #navGroupItem-md, #navItem-auto-code-nav-link, #navItem-score-models-nav-link").forEach(x=>x.removeClass("hidden"));
      nav.qs("#navItem-db-connection-nav-link").addClass("disabled");
      nav.qs("#navItem-file-upload-nav-link").addClass("disabled");
      nav.qs("#navItem-validate-features-nav-link").addClass("disabled");
      if (STORE.getProjectData(PROJECT.currentProjectKey(), EXPLORE_DATA.STORE_KEY) === false){
        nav.qs("#navItem-explore-data-nav-link").addClass("disabled");
      }
    } else if (name.includes("md")){
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering, #navItem-explore-data-nav-link, #navGroupItem-ae, #navGroupItem-mp, #navGroupItem-md, #navItem-auto-code-nav-link, #navItem-score-models-nav-link").forEach(x=>x.removeClass("hidden"));
      nav.qs("#navItem-db-connection-nav-link").addClass("disabled");
      nav.qs("#navItem-file-upload-nav-link").addClass("disabled");
      nav.qs("#navItem-validate-features-nav-link").addClass("disabled");
      if (STORE.getProjectData(PROJECT.currentProjectKey(), EXPLORE_DATA.STORE_KEY) === false){
        nav.qs("#navItem-explore-data-nav-link").addClass("disabled");
      }
    }
    if (STORE.getProjectMetadata(PROJECT.currentProjectKey(), DB_CONNECTION.STORE_KEY+"_connected") ||
        STORE.getProjectMetadata(PROJECT.currentProjectKey(), FILE_UPLOAD.STORE_KEY+"_uploaded")){
      nav.qs("#navItem-db-connection-nav-link").addClass("disabled");
      nav.qs("#navItem-file-upload-nav-link").addClass("disabled");
    }
    if (STORE.getProjectMetadata(PROJECT.currentProjectKey(), VALIDATE_FEATURES.STORE_KEY+"_features_saved")){
      nav.qs("#navItem-validate-features-nav-link").addClass("disabled");
    }
    if (STORE.getProjectData(PROJECT.currentProjectKey(), EXPLORE_DATA.STORE_KEY)){
      nav.qsa("#navGroupItem-data-engineering, #navItem-explore-data-nav-link").forEach(x=>x.removeClass("hidden"));
    }
    if (STORE.getProjectMetadata(PROJECT.currentProjectKey(), AE_AUTOMODEL.STORE_KEY+"_modeldev_complete")){
      nav.qs("#navItem-ae-automodel-nav-link").addClass("disabled");
      nav.qsa("#navItem-dashboard-nav-link, #navGroupItem-connection, #navGroupItem-data-engineering, #navItem-explore-data-nav-link, #navGroupItem-ae, #navGroupItem-mp, #navGroupItem-md, #navItem-auto-code-nav-link, #navItem-score-models-nav-link").forEach(x=>x.removeClass("hidden"));
    }
    my.updateBreadcrumb();
  };

  /**
   * @method createBreadCrumbNode 
   * @description Create a new list-item to be inserted breadcrumb
   * @param {string} id the id to be assigned to the newly created link
   * @param {string} cls the class to be assigned to the newly created link
   * @param {string} text text for the anchor tag
   * @param {string} link the URL to the anchor tag
   * @return {Element} an <li> tag with a child anchor for insertion into the breadcrumb
   * @private
   */
  var createBreadCrumbNode=function(id, cls, text, link){
    let templateLI=qs("#breadcrumb-bar #breadcrumbItem-dashboard").cloneNode();
    templateLI.id="breadcrumbItem-"+id;templateLI.setAttribute("class", cls?cls:"");
    let templateA=qs("#breadcrumb-bar #breadcrumbItem-dashboard a").cloneNode();
    if (link==""|| link==null|| typeof link !== 'string'){
      link="javascript:(function(){})();";
    }
    templateA.id=id; templateA.setAttribute("href", link); templateA.setAttribute("class","");
    templateA.innerText=text;
    templateLI.append(templateA);
    return templateLI;
  }

  /**
   * @method updateBreadcrumb 
   * @description update the breadcrumb based on the current page location in the UI.
   * @return array of breadcrumb list-item nodes that were added to the breadcrumb
   */
  my.updateBreadcrumb=function(){
    let name=my.getCurrentPageMarkerString();
    let link=my.getCurrentPageLinkNode();
    let nav=qs("#main-nav");
    let breadcrumbs=[];
    breadcrumbs.push(qs("#breadcrumb-bar #breadcrumbItem-dashboard"));
    if (name.includes("dashboard")){
    } else if (name.includes("connection")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-connectDB", "", "New DB Connection", "/#/db-connection/"+PROJECT.currentProjectKey()));
    } else if (name.includes("upload")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-connectDB", "", "File Upload", "/#/file-upload/"+PROJECT.currentProjectKey()));
    } else if (name.includes("validate-features") || name.includes("workflow-start")) {
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-data-engineering", "", "Data Engineering", ""));
      breadcrumbs.push(createBreadCrumbNode("br-validate-featues", "", "Validate Features", "/#/validate-features/"+PROJECT.currentProjectKey()));
    } else if (name.includes("explore-data")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-data-engineering", "", "Data Engineering", ""));
      breadcrumbs.push(createBreadCrumbNode("br-explore-data", "", "Explore Data", "/#/explore-data/"+PROJECT.currentProjectKey()));
    } else if (name.includes("ae")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("algorithm-engineering", "", "Algorithm Engineering", ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-development", "", "Model Development", "/#/ae-automodel/"+PROJECT.currentProjectKey()));
    } else if (name.includes("discrimination")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-performance", "", "Model Performance", ""));
      breadcrumbs.push(createBreadCrumbNode("br-ml-leaderboard", "", "ML Leaderboard", ""));
      breadcrumbs.push(createBreadCrumbNode("br-discrimination", "", "Discrimination", "/#/mp/mll/discrimination/"+PROJECT.currentProjectKey()));
    } else if (name.includes("calibration")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-performance", "", "Model Performance", ""));
      breadcrumbs.push(createBreadCrumbNode("br-ml-leaderboard", "", "ML Leaderboard", ""));
      breadcrumbs.push(createBreadCrumbNode("br-calibration", "", "Calibration", "/#/mp/mll/calibration/"+PROJECT.currentProjectKey()));
    } else if (name.includes("fprAndPA")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-performance", "", "Model Performance", ""));
      breadcrumbs.push(createBreadCrumbNode("br-ml-leaderboard", "", "ML Leaderboard", ""));
      breadcrumbs.push(createBreadCrumbNode("br-fpr", "", "FPR and Precision Analysis", "/#/mp/mll/fprAndPA/"+PROJECT.currentProjectKey()));
    } else if (name.includes("model-comparison")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-performance", "", "Model Performance", ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-comparision", "", "Model Comparison", "/#/mp/model-comparison/"+PROJECT.currentProjectKey()));
    } else if (name.includes("auto-code")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-deployment", "", "Model Deployment", ""));
      breadcrumbs.push(createBreadCrumbNode("br-auto-code", "", "Auto Code Generator", "/#/auto-code/"+PROJECT.currentProjectKey()));
    } else if (name.includes("score-models")){
      breadcrumbs.push(createBreadCrumbNode("br-project-"+PROJECT.currentProjectKey(), "", PROJECT.currentProjectKey(), ""));
      breadcrumbs.push(createBreadCrumbNode("br-model-deployment", "", "Model Deployment", ""));
      breadcrumbs.push(createBreadCrumbNode("br-score-models", "", "Score Models", "/#/score-models/"+PROJECT.currentProjectKey()));
    }
    qs("#breadcrumb-bar ul").innerHTML="";
    breadcrumbs.forEach(li=>qs("#breadcrumb-bar ul").append(li));
    return breadcrumbs;
  }
  return my;
}(APP || {}));
;
/**
 * @module APP
 * @description Provides the application entrypoint and app level scope for 
 * methods that affect the whole application
 */
;APP=(function(my){


  /**
   * @method init 
   * @description initialize the whole application. Called from main.js
   * @public
   */
  my.init=function(){
    if("pinned" == readCookie("navPinned")){
      my.pinNav();
    }
    my.initRoutes();
    my.registerUIListeners();
    if (my.isDebug() && window.navigateTo && window.navigateTo.length != 0 && typeof window.navigateTo == "string"){
      my.router.navigate(window.navigateTo);
      my.router.resolve();
      return;
    }
    creds=CREDENTIALS.getUserCreds();
    if (null == creds){
      my.router.navigate('/login');
    } else {
      my.router.navigate('/');
    }
    my.router.resolve();
  }

  /**
   * @method isDebug 
   * @description Is the UI running in debug mode. The UI is running in debug mode if:
   * 1. it is a development build, i.e. the "--dev" flag was set during the gulp build
   * 2. the "isDebug" cookie has been set.
   * @return true if running in debug mode, else false
   * @public
   */
  my.isDebug=function(){
    let isDebug = window.isDebug || readCookie("isDebug");
    if (!isDebug || typeof isDebug == "undefined"){
      isDebug=false;;
    } else {
      isDebug=true;;
    }
    return isDebug;
  }
  
  return my;
}(APP || {}));

;
/**
 * @module PROJECT
 * @description An object to handle the representation of a project in the application. Handles project
 * creation dialog and action and keeps track of the currently active project context.
 */
var PROJECT = (function(my){
  /**
   * @member {string} _currentProjectKey
   * @description a project key that represents the currently active project context.
   * @private
   */
  _currentProjectKey=null;

  /**
   * @method currentProjectKey
   * @description current application project context
   * @returns {string} project ID of the currently active project context
   * @public
   */
  my.currentProjectKey=function(){
    
    if (_currentProjectKey==null && !APP.isDebug()){
      throw new Error("No project currently active");
    } else if (_currentProjectKey==null && APP.isDebug() && useTestData){
      return PROJECTS_DATA.testProjectKey();
    }
    return _currentProjectKey;
  }

  /**
   * @method setCurrentProjectKey
   * @description Sets the currently active project key
   * @param {string} key project key
   * @public
   */
  my.setCurrentProjectKey=function(key){
    if (key){
      _currentProjectKey=key;
    }
  }

  /**
   * @method showCreateProjectDialog
   * @description show a dialog that gets the paraemeters for creating a new project on the server
   * @returns {Promise} returns a Promise that resolves to a set of parameters required for creating
   * a new project on the server. Rejects with "cancelled" if closed by user
   * @property {string} pname Project Name
   * @property {string} description Description of the project
   * @property {string} ptype Project Type: Classification, Prediction, Estimation, Optimization
   * @property {string} platform Platform: In-house, CI Cloud
   * @async 
   * @public
   */
  my.showCreateProjectDialog = async function(){
    return new Promise((resolve, reject) => {
      var dlg = createNode(createprojectTemplate());
      qs("#dialogs-sleeping").appendChild(dlg);
      // APP.registerCompactLabel(dlg.qsa('label.compact'));
      APP.showDialog(dlg);
      [].forEach.call(dlg.qsa("button.close, #cancel-button"), function(button){button.addEventListener("click", evt=>{
        APP.hideDialog(dlg);
        dlg.remove();
        reject("cancelled");
      })});
      dlg.qs("#create-button").addEventListener("click", evt=>{
        var pname=dlg.qs("#input-pname").value;
        var description=dlg.qs("#textarea-description").value;
        var ptype=dlg.qs("#select-ptype").value;
        var platform=dlg.qs("#select-platform").value;

        //TODO: do something about remember me too!
        APP.hideDialog(dlg);
        dlg.remove();
        resolve({pname, description, ptype, platform});
      });
    });
  }

  /**
   * @method createProject
   * @description Called fromt the router to collect the project creation params from the user and 
   * create a new project on the API server
   * @public
   */
  my.createProject = async function(){ 
    let project=null,
        params=null;
    try{
      params = await my.showCreateProjectDialog();
    } catch (err){
      if ("cancelled" == err){
        APP.router.navigate('/');
        console.log(err);
        return;
      }
    }
    if (!params){
      APP.showError(i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC);
      APP.router.navigate('/');
      return;
    }
    try {
      var result = await createProjectAction(params);
      if (result.status == "success"){
        APP.showInfo(i18n.en.APP.UI.INFO.PROJECT_CREATION.GENERIC_SUCCESS);
      }
    } catch (err) {
      APP.showError(err.message);
    }
    APP.resetProgress();
    APP.router.navigate(`/db-connection/${result.data.posts[0].projectKey}`);
  }

  /**
   * @method createProjectAction
   * @description Create a new project on the server using the `project/new` API
   * @param {object} iparams Input parameters for creating a project as obtained from the project creation dialog
   * @property {string} pname Project Name
   * @property {string} description Description of the project
   * @property {string} ptype Project Type: Classification, Prediction, Estimation, Optimization
   * @property {string} platform Platform: In-house, CI Cloud
   */
  var createProjectAction=async function(iparams){
    let url=SERVER.getBaseAddress() + 'project/new';
    let userHash=CREDENTIALS.getUserCreds();
    APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_PROJECT);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.PROJECT_CREATION.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      pname: "",
      description: "",
      ptype: "",
      platform: "",
      NoModels: 0
    }, iparams);
    let keys=[];
    Object.keys(params).forEach(k=>{
      if (""===params[k]){
        keys.push(k);
      }
    });
    if (keys.length>0){
      let err=new Error(`${i18n.en.APP.UI.ERROR.PROJECT_CREATION.EMPTY_INPUT}:\n${keys.join(", ")}`);err.name='InputError';throw err;
    }
    let result=null;
    try{
      if (useTestData){
        result=await PROJECTS_DATA.create(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    try {
      if (result==null || (result.status != "success" && result.status != 200)){
        console.log({result: result});
        let err=new Error(i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC);err.name='GenericError';throw err;
      }
    } catch (err){
      console.log(err);
      err=new Error(i18n.en.APP.UI.ERROR.PROJECT_CREATION.GENERIC);err.name='GenericError';throw err;
    }
    my.setCurrentProjectKey(result.data.posts[0]['projectKey']);
    return result;

  }

  /**
   * @method cleanUp
   * @description unset the active project to "BLANK"
   */
  my.cleanUp=function(){
    my.setCurrentProjectKey("BLANK");
  }

  return my; 

}(PROJECT || {}));;
/**
 * @module DB_CONNECTION 
 * @description this module creates, shows, handles the input and the workflow for the new DB connection dialog.
 */
var DB_CONNECTION = (function(my){

  /**
   * @member {string} STORE_KEY the key used to cache this dialog's data in the STORE
   * @public
   */
  my.STORE_KEY="DB_CONNECTION";

  /**
   * @member _conname stored connection name for the current DB connection
   * @private
   */
  var _conname="123";

  /**
   * @method getCurrentConnection 
   * @description Get the current DB connection name. Exists only in the context of a project. Does not have meaning otherwise.
   * @returns {string} returns the current active DB connection. 
   * @public
   */
  my.getCurrentConnection=function(){
    return _conname;
  }

  /**
   * @method showDBConnectionDialog 
   * @description Shows the database connection dialog. Obtains parameters for the DB connection and returns them as a promise.
   * @returns {Promise} A promise that resolves to parameters for a DB connection else rejected with the string "cancelled".
   * @param {object} iparams Either a string with the project key, or a config object with the following properties
   * @property {string} iparams.pkey project key
   * @property {string} iparams.destinationOnSuccess URL after the hash to redirect after success
   * @property {string} iparams.destinationOnError URL after the hash to redirect to on error
   * @property {string} iparams.destinationOnCancel URL after the hash to redirect to on cancel. Can also be the string "back" in which
   * case the UI will navigate back to the previous screen
   * @property {string} iparams.sourceType "development" for training. this is the data source type.
   * @public
   * @async
   */
  my.showDBConnectionDialog = async function(iparams){
    return new Promise((resolve, reject) => {
      var dlg = qs("#new-db-connection-dialog");
      if (!dlg || typeof dlg == "undefined"){
        dlg=createNode(dbconnectionTemplate());
        qs("#dialogs-sleeping").appendChild(dlg);
      }
      if (iparams.sourceType == "development"){
        dlg.qs("#dev-or-prod").checked=false;
      } else {
        dlg.qs("#dev-or-prod").checked=true;
      }
      dlg.qs("button.close").addEventListener("click", evt=>{//dialog close button
        APP.hideDialog(dlg);
        dlg.remove();
        if (iparams.destinationOnCancel != "back"){
          APP.router.navigate(iparams.destinationOnCancel);
        }
        reject("cancelled");
      });

      let changeListener=function(evt){//re-disable next button and remove test button's overlays
        dlg.qs("#next-button").setAttribute("disabled", "disabled");
        dlg.qs("#test-button").addClass("untested").removeClass("fail").removeClass("success");
      }
      dlg.qsa("#input-new-named-connection, #select-db-type, #input-db-name, #input-table-name, #input-db-server-name, #input-port-number, #input-db-username, #input-db-password").forEach(function(x, i){
        x.addEventListener('change', changeListener);
      });

      let clickListener=function(evt){//test/next buttons clicked.
        let allValid=true;
        dlg.qsa("#input-new-named-connection, #select-db-type, #input-db-name, #input-table-name, #input-db-server-name, #input-port-number, #input-db-username, #input-db-password").forEach(function(x, i){
          if (x.hasClass("invalid")){
            allValid=false;
          }
        });
        if (!allValid) {
          dlg.qs("#test-button").addClass("fail").removeClass("untested").removeClass("success");
          return;
        }
        var params={
          connectionType: evt.currentTarget.id=='test-button'?"test":"final",
          conname: dlg.qs("#input-new-named-connection").value,
          dbtype: dlg.qs("#select-db-type").value,
          dbname: dlg.qs("#input-db-name").value,
          tblname: dlg.qs("#input-table-name").value,
          serverip: dlg.qs("#input-db-server-name").value,
          portno: dlg.qs("#input-port-number").value,
          uname: dlg.qs("#input-db-username").value,
          passwd: dlg.qs("#input-db-password").value,
          sourcetype: dlg.qs("#dev-or-prod").checked,
          datatype: dlg.qs("#dev-or-prod").checked?"OUT_OF_TIME":"IN_TIME",
        }
        //need to remove the listeners on buttons and input/select controls because the resolve in the event listener is for to this Promise instance.
        //it will be a new promise instance when the function is called again once the test goes through.
        dlg.qs("#test-button").removeEventListener("click", clickListener);
        dlg.qs("#next-button").removeEventListener("click", clickListener);
        dlg.qsa("#input-new-named-connection, #select-db-type, #input-db-name, #input-table-name, #input-db-server-name, #input-port-number, #input-db-username, #input-db-password").forEach(function(x, i){
          x.removeEventListener('change', changeListener);
        });
        resolve(params);
      }
      dlg.qs("#test-button").addEventListener("click", clickListener);
      dlg.qs("#next-button").addEventListener("click", clickListener);
      if (!dlg.open) APP.showDialog(dlg);
    });
  }

  /**
   * @method dbConnection 
   * @description Create a database connection by showing a DB connection dialog and getting connection 
   * parameters from the user. Doesn't dismiss the dialog until the user is done testing. 
   * @param {object} iparams Either a string with the project key, or a config object with the following properties
   * @property {string} iparams.pkey project key
   * @property {string} iparams.destinationOnSuccess URL after the hash to redirect after success
   * @property {string} iparams.destinationOnError URL after the hash to redirect to on error
   * @property {string} iparams.destinationOnCancel URL after the hash to redirect to on cancel. Can also be the string "back" in which
   * case the UI will navigate back to the previous screen
   * @property {string} iparams.sourceType "development" for training. this is the data source type.
   * @return {Promise} a promise that is resolves to the connection params or rejects with "cancelled"
   * @async
   * @public
   */
  my.dbConnection = async function(iparams){ 
    let projectKey=null;
    if (typeof iparams=="string"){
      iparams={
        pkey: iparams,
        destinationOnSuccess: "/workflow-start",
        destinationOnError: "/",
        destinationOnCancel: "back",
        sourceType: "development",
      };
    }
    projectKey=iparams.pkey;
    let project=null,
        params={connectionType:'test'};
    while(params.connectionType=='test'){
      try{
        params = await my.showDBConnectionDialog(iparams);
        params.projectKey=projectKey?projectKey:PROJECT.currentProjectKey();
        if (params.connectionType == "test"){
          let result=await createDBConnection(params, true);
          if (result!=null && (result.status == "success" || (result.status >= 200 && result.status < 300))){
            qs("#new-db-connection-dialog #test-button").toggleClass("untested,success");
            qs("#new-db-connection-dialog #next-button").removeAttribute("disabled");
            APP.resetProgress();
          } else {
            qs("#new-db-connection-dialog #test-button").toggleClass("untested,fail");
            qs("#new-db-connection-dialog #next-button").setAttribute("disabled", "disabled");
            APP.resetProgress();
          }
          console.log(result);
          continue;
        }
        let dlg=qs("#new-db-connection-dialog");
        APP.hideDialog(dlg);
        dlg.remove();
        let result=await createDBConnection(params, false);
        if (result!=null && (result.status == "success" || (result.status >= 200 && result.status < 300))){
          _conname=params.conname;
          APP.resetProgress();
          STORE.setProjectMetadata(params.projectKey, DB_CONNECTION.STORE_KEY+"_connected", true);
          if (iparams.destinationOnSuccess != "back"){
            APP.router.navigate(iparams.destinationOnSuccess);
          }
          APP.showInfo("DB connection created successfully.");
          return Promise.resolve(params);
        } else {
          APP.resetProgress();
          if (iparams.destinationOnError != "back"){
            APP.router.navigate(iparams.destinationOnError);
          }
          APP.showError(i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC + ": " + result.status);
          return Promise.reject(i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC + ": " + result.status);
        }
      } catch (err){
        APP.resetProgress();
        if ("cancelled" == err){
          if (iparams.destinationOnCancel != "back"){
            APP.router.navigate(iparams.destinationOnCancel);
          } 
          console.log(err);
          return Promise.reject(err);
        }
      }
      
    }
    if (!params){
      APP.showError(i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC);
      if (iparams.destinationOnError){
        if (iparams.destinationOnError != "back"){
          APP.router.navigate(iparams.destinationOnError);
        }
      } else {
        APP.router.navigate('/');
      }
      return Promise.reject(i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC);
    }
  }

  /**
   * @method createDBConnection 
   * @description Makes a server call to create a DB connection
   * @param {Object} iparams parameters for the DB connection
   * @property {Number} iparams.key userHash for this server session
   * @property {string} iparams.conname name to assign this connection
   * @property {string} iparams.dbtype database type: Oracle, MySQL, PostgreSQL, Hive
   * @property {string} iparams.tblname the table in the DB to connect to
   * @property {string} iparams.serverip FQN or ip addresss of the DB server
   * @property {string} iparams.portno Port# for the DB connection
   * @property {string} iparams.uname DB username
   * @property {string} iparams.passwd DB password for iparams.uname
   * @property {string} iparams.datatype Which kind of data is it IN_TIME or OUT_OF_TIME
   * @property {boolean} isTest test connection params or actually establish connection
   * @private
   * @async
   */
  var createDBConnection=async function(iparams, isTest){
    let url=SERVER.getBaseAddress() + 'connection/db/test';
    if (!isTest){url=SERVER.getBaseAddress() + 'connection/db/new';}
    let userHash=CREDENTIALS.getUserCreds();
    if (isTest){
      APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION);
    } else {
      APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION);
    }
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC);
    }
    let params=extend({
      key: userHash, 
      conname: "",
      dbtype: "",
      dbname: "",
      tblname: "",
      serverip: "",
      portno: "",
      uname: "",
      passwd: "",
      datatype: "IN_TIME"
    }, iparams);
    let keys=[];
    Object.keys(params).forEach(k=>{
      if (""===params[k]){
        keys.push(k);
      }
    });
    if (keys.length>0){
      let err=new Error(`${i18n.en.APP.UI.ERROR.DB_CONNECTION.EMPTY_INPUT}:\n${keys.join(", ")}`);err.name='InputError';throw err;
    }
    let result=null;
    try{
      if (useTestData){
        result=await DB_CONNECTION_DATA.connect(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    if (result==null || (result.status != "success" && !(result.status >= 200 && result.status < 300))){
      console.log({result: result});
      let err=new Error(i18n.en.APP.UI.ERROR.DB_CONNECTION.GENERIC);err.name='GenericError';throw err;
    }
    return result;

  }

  /**
   * @method hideDialog 
   * @description hide the db connection dialog by simulating a close button click. Will trigger the 
   * callback normally called on clicking the dialog's close button.
   * @public
   */
  my.hideDialog = function(){
    var dlg = qs("#new-db-connection-dialog");
    if (dlg && !dlg.hidden){
      dlg.qs("button.close").fireCustomEvent("click");
    }
  }

  return my; 

}(DB_CONNECTION || {}));

;
/**
 * @module FILE_UPLOAD 
 * @description Create the file upload dialog from the Pug template. Handles the Drag and drop 
 * interaction and also the API calls for the new connection. Also uploads the file to the server, shows 
 * progress etc.
 */
var FILE_UPLOAD = (function(my){
  /**
   * @member STORE_KEY the store key used for cached data storage in the STORE
   * @public
   */
  my.STORE_KEY="FILE_UPLOAD";

  /**
   * @method showfileUploadDialog 
   * @description Shows the database connection dialog. Obtains parameters for the File upload and returns them as a promise.
   * @param {object} iparams config object for setting up the file upload function. 
   * @property {string} iparams.pkey project key
   * @property {string} iparams.destinationOnSuccess URL after the hash to redirect after success
   * @property {string} iparams.destinationOnError URL after the hash to redirect to on error
   * @property {string} iparams.destinationOnCancel URL after the hash to redirect to on cancel. Can also be the string "back" in which
   * case the UI will navigate back to the previous screen
   * @property {string} iparams.sourceType "development" for training. this is the data source type.
   * @returns {Promise} A promise that resolves to parameters for a File upload else rejected with the string "cancelled".
   * @async
   * @public
   */
  my.showUploadDialog = async function(iparams){
    return new Promise((resolve, reject) => {
      var dlg = qs("#file-upload-dialog");
      if (!dlg || typeof dlg == "undefined"){
        dlg=createNode(fileuploadTemplate());
        qs("#dialogs-sleeping").appendChild(dlg);
      }
      setUpDnD();
      if (iparams.sourceType == "development"){
        dlg.qs("#file-dev-or-prod").checked=false;
      } else {
        dlg.qs("#file-dev-or-prod").checked=true;
      }
      dlg.qs("button.close").addEventListener("click", evt=>{//dialog close button
        APP.hideDialog(dlg);
        dlg.remove();
        if (iparams.destinationOnCancel != "back"){
          APP.router.navigate(iparams.destinationOnCancel);
        }
        reject("cancelled");
      });

      COMPACT_LABEL.registerCompactLabel(dlg.qs("#loc-on-server"));


      let changeListener=function(evt){//re-disable next button and remove test button's overlays
        dlg.qs("#file-next-button").setAttribute("disabled", "disabled");
        dlg.qs("#file-test-button").addClass("untested").removeClass("fail").removeClass("success");
      };
      dlg.qsa("#input-file-connection-name, #input-loc-on-server").forEach(function(x, i){
        x.addEventListener('change', changeListener);
      });

      let clickListener=function(evt){//test/next buttons clicked.
        let allValid=true;
        dlg.qsa("#input-file-connection-name, #input-loc-on-server").forEach(function(x, i){
          if (x.hasClass("invalid")){
            allValid=false;
          }
        });
        if (!allValid) {
          dlg.qs("#file-test-button").addClass("fail").removeClass("untested").removeClass("success");
          return;
        }
        var params={
          connectionType: evt.currentTarget.id=='file-test-button'?"test":"final",
          conname: dlg.qs("#input-file-connection-name").value,
          filePath: dlg.qs("#input-loc-on-server").value,
          sourcetype: dlg.qs("#file-dev-or-prod").checked,
          datatype: dlg.qs("#file-dev-or-prod").checked?"OUT_TIME":"IN_TIME",
        }
        //need to remove the listeners on buttons and input/select controls because the resolve in the event listener is for to this Promise instance.
        //it will be a new promise instance when the function is called again once the test goes through.
        dlg.qs("#file-test-button").removeEventListener("click", clickListener);
        dlg.qs("#file-next-button").removeEventListener("click", clickListener);
        dlg.qsa("#input-file-connection-name, #input-loc-on-server").forEach(function(x, i){
          x.removeEventListener('change', changeListener);
        });
        var form=dlg.qs("#drop-area");
        form.removeEventListener("dragover", dragon);
        form.removeEventListener("dragenter", dragon);
        form.removeEventListener("dragleave", dragoff);
        form.removeEventListener("drop", dragoff);
        form.removeEventListener("drop", dropfile);
        resolve(params);
      }
      dlg.qs("#file-test-button").addEventListener("click", clickListener);
      dlg.qs("#file-next-button").addEventListener("click", clickListener);
      if (!dlg.open) APP.showDialog(dlg);
    });
  }

  /**
   * @method setUpDnD 
   * @description set up the drag and drop functionality on the file upload dialog. The relevant
   * drag listeners are added and the dropped file is uploaded to the upload.php target on the webserver
   * @private
   */
  var setUpDnD=function(){
    var dlg = qs("#file-upload-dialog");
    if (!isDnDAvailable()){
      dlgg.qs("#drop-area").addClass("no-dnd");
      return;
    }
    if (isDnDAvailable()) {
      var droppedFiles = false;
      var form=qs("#drop-area");
      form.addEventListener("dragover", dragon);
      form.addEventListener("dragenter", dragon);
      form.addEventListener("dragleave", dragoff);
      form.addEventListener("drop", dragoff);
      form.addEventListener("drop", dropfile);
    }
    form.qs("#file-upload-input").addEventListener("change", evt=>{
      handleFiles(evt.target.files);
    });
  };
  var dragon=function(evt){evt.target.addClass("is-dragover");evt.preventDefault();evt.stopPropagation();};
  var dragoff=function(evt){evt.target.removeClass("is-dragover");evt.preventDefault();evt.stopPropagation();};
  var dropfile=function(evt){
    evt.target.removeClass("is-dragover");
    droppedFiles = evt.dataTransfer.files;
    handleFiles(droppedFiles);
    evt.preventDefault();
    evt.stopPropagation();
  };

  /**
   * @method handleFiles 
   * @description call uploadFile on each file in the passed files list
   * @param {File[]} files array of File objects as dropped by the dnd interaction or browsed using the file input
   * dialog
   * @private
   */
  var handleFiles=function(files) {
    var dlg = qs("#file-upload-dialog");
    ([...files]).forEach(uploadFile);
    dlg.qs("#drop-area").addClass("uploading");
  };

  /**
   * @method uploadFile 
   * @description upload the specified file object to upload.php. update the file upload dialog
   * to indicate success or failure. update the file input dialog with the name of the file uploaded, for use
   * with a further call to connection/file/new API
   * @param {File} file the file to be uploaded
   */
  var uploadFile=function(file){
    var dlg = qs("#file-upload-dialog");
    let url='/upload.php';
    let formData=new FormData();
    formData.append('file', file);
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(function(result){
      dlg.qs("#drop-area").removeClass("uploading,is-dragover");
      if (result.OK==1){
        dlg.qs("#drop-area").addClass("upload-successful").removeClass("upload-failed");
        dlg.qs(".status.success span.name").innerText=result.filename;
        dlg.qs("#input-loc-on-server").value=result.filename;
        dlg.qs("#input-loc-on-server").fireCustomEvent("change");
      } else if (result.OK==0){
        dlg.qs("#drop-area").addClass("upload-failed").removeClass("upload-successful");
        dlg.qs(".status.fail .server-error").innerText=result.info;
        dlg.qs(".status.fail .resolution").innerText=result.resolution;
      }
    })
    // .catch(function(){console.log(arguments);})
  }
  

  /**
   * @method fileUpload 
   * @description Create a File connection by showing a File Upload dialog and getting connection 
   * parameters from the user. Doesn't dismiss the dialog until the user is done testing. 
   * @param {Object} iparams parameters for the File upload connection
   * @param {Number} iparams.key userHash for this server session
   * @param {string} iparams.conname name to assign this connection
   * @param {string} iparams.filePath path to file on server
   * @param {string} iparams.datatype IN_TIME or OUT_TIME
   * @param {boolean} isTest test connection params or actually establish connection
   * @public
   * @async
   */
  my.fileUpload = async function(iparams){ 
    let projectKey=null;
    if (typeof iparams=="string"){
      iparams={
        pkey: iparams,
        destinationOnSuccess: "/workflow-start",
        destinationOnError: "/",
        destinationOnCancel: "back",
        sourceType: "development",
      };
    }
    projectKey=iparams.pkey;
    let project=null,
        params={connectionType:'test'};
    while(params.connectionType=='test'){
      try{
        params = await my.showUploadDialog(iparams);
        params.projectKey=projectKey?projectKey:PROJECT.currentProjectKey();
        let dlg=qs("#file-upload-dialog");
        if (params.connectionType == "test"){
          let result=await createFileConnection(params, true);
          if (result!=null && (result.status == "success" || (result.status >= 200 && result.status < 300))){
            dlg.qs("#file-test-button").toggleClass("untested,success");
            dlg.qs("#file-next-button").removeAttribute("disabled");
          } else {
            dlg.qs("#file-test-button").toggleClass("untested,fail");
            dlg.qs("#file-next-button").setAttribute("disabled", "disabled");
          }
          APP.resetProgress();
          console.log(result);
          continue;
        }
        APP.hideDialog(dlg);
        dlg.remove();
        let result=await createFileConnection(params, false);
        if (result!=null && (result.status == "success" || (result.status >= 200 && result.status < 300))){
          _conname=params.conname;
          APP.resetProgress();
          STORE.setProjectMetadata(params.projectKey, FILE_UPLOAD.STORE_KEY+"_connected", true);
          if (iparams.destinationOnSuccess != "back"){
            APP.router.navigate(iparams.destinationOnSuccess);
          }
          APP.showInfo("Flat file connection created successfully.");
          return Promise.resolve(params);
        } else {
          APP.resetProgress();
          if (iparams.destinationOnError != "back"){
            APP.router.navigate(iparams.destinationOnError);
          }
          APP.showError(i18n.en.APP.UI.ERROR.FILE_UPLOAD.GENERIC + ": " + result.status);
          return Promise.reject(i18n.en.APP.UI.ERROR.FILE_UPLOAD.GENERIC + ": " + result.status);
        }
      } catch (err){
        APP.resetProgress();
        if ("cancelled" == err){
          if (iparams.destinationOnCancel != "back"){
            APP.router.navigate(iparams.destinationOnCancel);
          } 
          console.log(err);
          return Promise.reject(err);
        }
      }
      
    }
    if (!params){
      APP.showError(i18n.en.APP.UI.ERROR.FILE_UPLOAD.GENERIC);
      if (iparams.destinationOnError){
        if (iparams.destinationOnError != "back"){
          APP.router.navigate(iparams.destinationOnError);
        }
      } else {
        APP.router.navigate('/');
      }
      return Promise.reject(i18n.en.APP.UI.ERROR.FILE_UPLOAD.GENERIC);
    }
  }

  /**
   * @method createFileConnection 
   * @description Makes a server call to create a File upload connection to 
   * connection/file/new API
   * @param {Object} iparams parameters for the File upload connection
   * @param {Number} iparams.key userHash for this server session
   * @param {string} iparams.conname name to assign this connection
   * @param {string} iparams.filePath path to file on server
   * @param {string} iparams.datatype IN_TIME or OUT_TIME
   * @param {boolean} isTest test connection params or actually establish connection
   * @private
   * @async
   */
  var createFileConnection=async function(iparams, isTest){
    let url=SERVER.getBaseAddress() + 'connection/file/test';
    if (!isTest){url=SERVER.getBaseAddress() + 'connection/file/new';}
    let userHash=CREDENTIALS.getUserCreds();
    if (isTest){
      APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.TEST_CONNECTION);
    } else {
      APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.CREATE_CONNECTION);
    }
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.FILE_UPLOAD.GENERIC);
    }
    let params=extend({
      key: userHash, 
      conname: "",
      filePath: "",
      datatype: "IN_TIME"
    }, iparams);
    let keys=[];
    Object.keys(params).forEach(k=>{
      if (""===params[k]){
        keys.push(k);
      }
    });
    if (keys.length>0){
      let err=new Error(`${i18n.en.APP.UI.ERROR.FILE_UPLOAD.EMPTY_INPUT}:\n${keys.join(", ")}`);err.name='InputError';throw err;
    }
    let result=null;
    try{
      if (useTestData){
        result=await FILE_UPLOAD_DATA.connect(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    if (result==null || (result.status != "success" && !(result.status >= 200 && result.status < 300))){
      console.log({result: result});
      let err=new Error(i18n.en.APP.UI.ERROR.FILE_UPLOAD.GENERIC);err.name='GenericError';throw err;
    }
    return result;

  }

  /**
   * @method hideDialog 
   * @description hide the file upload dialog by simulating a close button click. Will trigger the 
   * callback normally called on clicking the dialog's close button.
   * @public
   */
  my.hideDialog = function(){
    var dlg = qs("#file-upload-dialog");
    if (dlg && !dlg.hidden){
      dlg.qs("button.close").fireCustomEvent("click");
    }
  }

  return my; 

}(FILE_UPLOAD || {}));

;
/**
 * @module VALIDATE_FEATURES
 * @description module for creation of the "Validate Features" page. The page shows the table of
 * features received using the `de/featurevalidate` API and allows the user to select features and 
 * mark one as the target. This feature configuration is sent to the `de/modelcfg` API.
 */
var VALIDATE_FEATURES = (function(my){
  /**
   * @member {string} STORE_KEY 
   * @description the key for caching data in the STORE
   * @public
   */
  my.STORE_KEY="VALIDATE_FEATURES";

  /**
   * @method getData
   * @description call the `de/featurevalidate` API to get the list of features to be configured.
   * @param {string} pkey The project ID in the context of which the view is loaded
   * @return {object} returns the result of the `de/featurevalidate` server API call (the actual deserialized JSON)
   * @public
   * @async
   */

  /**
   * @member selectionModel
   * @description store the target/input/reject state for each feature. The UI should always reflect
   * the state from this model
   * @property {string} target The feature currently marked as TARGET
   * @property {string[]} input A list of features currently marked INPUT
   * @property {string[]} reject A list of features currently marked REJECT
   * @property {function} clear Resets `target`, `input` and `reject` to initial empty values.
   * @property {function} set [params: bucket, featureName] Add featureName to bucket. Ensure that:
   * * Feature previously marked `target` is moved to the `input` list
   * * Feature being set as `target` is removed from `input` and `reject` lists
   * * Feature being set as `input` or `reject` is unset as `target`
   * @private
   */
  var selectionModel={
    target: null,
    input: [],
    reject:[],
    clear: function(){
      this.target=null;
      this.input=[];
      this.reject=[];
    },
    set: function(bucket, featureName){
      if (bucket == "target"){
        if (this.target !== null){
          this.input.push(this.target);
        }
        if (this.target !== featureName){
          this.target = featureName;
          ["input", "reject"].forEach(b=>{
            let index = this[b].indexOf(featureName);
            if (index >= 0){
              this[b].splice(index, 1);
            }
          });
        }
      } else {
        ["input", "reject"].forEach(b=>{
          if (b==bucket){
            this[b].push(featureName);
          } else {
            let index = this[b].indexOf(featureName);
            if (index >= 0){
              this[b].splice(index, 1);
            }
          }
          if (this.target == featureName){
            this.target = null;
          }
        });
      }
    }

  };

  my.getData = async function(pkey){
    let url=SERVER.getBaseAddress() + 'de/featurevalidate',
        userHash=CREDENTIALS.getUserCreds(),
        projectKey = pkey?pkey:PROJECT.currentProjectKey();

    let storedData=STORE.getProjectData(projectKey, my.STORE_KEY);
    if (storedData){
      return storedData;
    }

    APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS+"\n"+i18n.en.APP.UI.ERROR.VALIDATE_FEATURES.GENERIC);
    }
    if (projectKey == null){
      throw new Error(i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT);
    }
    let params={
      key: userHash, 
      projectKey: projectKey
    };
    let result=null;
    try{
      if (useTestData){
        result=await VALIDATE_FEATURES_DATA.getData();
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }

    if (result==null || (result.status != "success" && !(result.status >= 200 && result.status < 300))){
      console.log({result: result});
      APP.showError("There was an error in fetching feature list from the server. Please contact an Administrator.");
      APP.resetProgress();
      let err=new Error(i18n.en.APP.UI.ERROR.VALIDATE_FEATURES.GENERIC);err.name='GenericError';throw err;
    }
    STORE.setProjectData(projectKey, my.STORE_KEY, result);
    STORE.setProjectMetadata(projectKey, my.STORE_KEY+"_features_fectched", true);
    return result;
  };

  /**
   * @member listObject
   * @description the object returned by `list.js`, the library that provides sorting and searching
   * functionality for the table.
   */
  my.listObject=null;

  /**
   * @method bucketChanged
   * @description A delegated event listener that will update the selection model for the table
   * and execute a UI update
   * @param {Event} evt Change event for a bucket button in the features table
   */
  var bucketChanged=function(evt){
    let radio = evt.target;
    let feature=radio.closest("tr").qs("td[data-key=featureName]").getAttribute("data-val");
    let bucket=radio.getAttribute("extra");
    selectionModel.set(bucket, feature);
    updateTableSelection();
  }
  
  /**
   * @method updateTableSelection
   * @description reset all the buckets from the [`selectionModel`](#~selectionModel)
   */
  var updateTableSelection=function(){
    if (selectionModel.target){
      let input=qs(`#features-table-container td[data-val=${selectionModel.target}]~td.actions input[extra=target]`);
      input!==null?input.checked=true:APP.noop();
    }
    if (selectionModel.input.length>0){
      selectionModel.input.forEach(featureName=>{
        let input=qs(`#features-table-container td[data-val=${featureName}]~td.actions input[extra=input]`);
        input!==null?input.checked=true:APP.noop();
      });
    }
    if (selectionModel.reject.length>0){
      selectionModel.reject.forEach(featureName=>{
        let input=qs(`#features-table-container td[data-val=${featureName}]~td.actions input[extra=reject]`);
        input!==null?input.checked=true:APP.noop();
      });
    }
  }
  /**
   * @method validateFeatures
   * @description called from the router to initialize and display the view and handle the user interaction
   * for selecting dv and rejected features.
   * @param {string} pkey The project ID in the context of which the view is loaded
   * @public
   * @async
   */
  my.validateFeatures = async function(pkey){ 
    let result=await my.getData();
    selectionModel.clear();
    let tableData=[];
    for (x in result.data.posts[0]){
      selectionModel.input.push(x);
      tableData.push({featureName: x, featureType: result.data.posts[0][x], role: ""});
    }
    APP.resetProgress();
    qs("#features-table-container").childNodes.forEach((x, i)=>x.remove()); //empty the table
    
    //The view's data is cached so that it can still be shown again. The modelCfg API can
    //called only once. So the save button is disabled the second time through.
    if (STORE.getProjectMetadata(pkey, VALIDATE_FEATURES.STORE_KEY+"_features_saved")===false){
      qs("button#save-validate-features").removeAttribute("disabled");
    }
    qs("#features-table-container").appendChild(createNode(tableTemplate({
      data: tableData,
      headerText: ["Feature Name", "Feature Type", "Role"],
      headerKeys: ["featureName", "featureType", "actions"],
      hasSelectionCol:true,
      hasSelectAll: true,
      hasActionsColumn: true,
      tableAttributes: {
        "class": "scrollable-table",
      },
      actions: function(rowIndex){
        return `<div>
                  ${togglebuttonTemplate({text: "Target", id:"target-button-"+rowIndex, name:"actions-"+rowIndex, class:"validate-action target", checked: false, extra: "target"})}
                  ${togglebuttonTemplate({text: "Input", id:"input-button-"+rowIndex, name:"actions-"+rowIndex, class:"validate-action input", checked: true, extra: "input"})}
                  ${togglebuttonTemplate({text: "Reject", id:"reject-button-"+rowIndex, name:"actions-"+rowIndex, class:"validate-action reject", checked: false, extra: "reject"})}
                </div>`
      }
    })));

    qs("button#save-validate-features").addEventListener("click", my.save);

    //add sorting and searching
    let searchRow=qs("#features-table-container thead tr.headerRow").cloneNode(true);
    searchRow.removeClass("headerRow").addClass("searchRow");
    searchRow.qsa("th").forEach(th=>{
      th.innerHTML="";
      if (th.hasClass("featureName,featureType")){
        th.innerHTML=`<input type="text" class="search ${th.hasClass("featureName")?"featureName":"featureType"}" data-search="${th.hasClass("featureName")?"featureName":"featureType"}"/>`
      }
    });
    qs("#features-table-container thead").appendChild(searchRow);
    var list=new List("features-table-container", {valueNames: ['select', 'featureName', 'featureType', 'actions']});
    my.listObject=list;
    my.listObject.on("updated", updateTableSelection);
    qs("#features-table-container thead tr.searchRow").qsa(".featureName, .featureType").forEach((th, i)=>{//sorting
      th.qsa("input[type=text]").forEach(input=>input.addEventListener("click", function(evt){
        evt.stopPropagation();
      }));
    });
    qs("#features-table-container thead tr.headerRow").qsa(".featureName, .featureType").forEach((th, i)=>{//sorting
      th.addEventListener("click", evt=>{
        if (evt.target.tagName.toLowerCase() !== "th"){
          return;
        }
        let sortOrder="asc";
        if (evt.currentTarget.hasClass("asc")){
          sortOrder="desc";
        }
        list.sort(evt.currentTarget.getAttribute("data-key"), {order: sortOrder});
        evt.currentTarget.closest('tr').qsa("th").forEach(x=>x.removeClass("asc,desc"));
        evt.currentTarget.addClass(sortOrder);
      });
    });
    
    qs("#features-table-container tbody").addEventListener("change", bucketChanged);

    qs("#features-table-container .selectAll").addEventListener("change", evt => {//check/uncheck all listener
      qsa("#features-table-container td.select .on-off input").forEach((button, i) => {
        button.checked=evt.currentTarget.checked;
      });
    });
    qs(".validate-features .bulk-update-action").addEventListener("change", evt=>{
      let bucket = evt.target.value;
      if (bucket!=""){
        selectionModel.clear();
        qsa("#features-table-container tbody tr td.select input:checked").forEach(checkedInput=>{
          selectionModel.set(bucket, checkedInput.closest("tr").qs("td.featureName").getAttribute("data-val"));
        });
      }
      updateTableSelection();
    });
    qsa("#features-table-container td.select .on-off input")//row selection change listener
      .forEach((radio, i) => radio.addEventListener("change", evt => {
        qs(".validate-features .bulk-update-action option:first-child").selected=true;//deselect bulk action on change of row selection.
        if(evt.currentTarget.checked==false){//uncheck select all if some row is unchecked
          qs("#features-table-container .selectAll").checked=false;
        }
      })
    );
  };

  /**
   * @method save
   * @description callback for the save button click. Makes a call to the de/modelcfg API on the server with array of
   * dropped features and the name of the target feature.
   * @public
   * @async
   */
  my.save=async function(){
    let url=SERVER.getBaseAddress() + 'de/modelcfg',
        userHash=CREDENTIALS.getUserCreds(),
        projectKey = PROJECT.currentProjectKey();
    APP.setProgress("Saving features...");
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS+"\n"+i18n.en.APP.UI.ERROR.VALIDATE_FEATURES.GENERIC);
    }
    if (projectKey == null){
      throw new Error(i18n.en.APP.UI.INFO.VALIDATE_FEATURES.NOT_IN_CONTEXT_OF_PROJECT);
    }
    var params={
      key: userHash, 
      projectKey: projectKey,
      post: [
        {dropVar: []},
        {dvVar: ""}
      ]
    };
    my.listObject.items.forEach(x=>{x.show();});
    qsa("#features-table-container .validate-action.reject:checked").forEach((button, i) => {
      params.post[0].dropVar.push(button.closest("tr").qs("td[data-key='featureName']").getAttribute("data-val"));
    });
    qsa("#features-table-container .validate-action.target:checked").forEach((button, i) => {
      params.post[1].dvVar=button.closest("tr").qs("td[data-key='featureName']").getAttribute("data-val");
    });
    let result=null;
    try{
      if (useTestData){
        result=await VALIDATE_FEATURES_DATA.save(params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    if (result==null || (result.status != "success" && !(result.status >= 200 && result.status < 300))){
      console.log({result: result});
      APP.resetProgress();
      APP.showError("Could not save feature settings. Please contact an Administrator.")
      let err=new Error("Could not save feature settings.");err.name='GenericError';throw err;
    } else {
      APP.showInfo("Feature list saved successfully.");
      STORE.setProjectMetadata(projectKey, my.STORE_KEY+"_features_saved", true);
      // let exploreDataNavItem = APP.nav.qs("#navItem-explore-data-nav-link").removeClass("hidden");
      // let feNavGroup = APP.nav.qs("#navGroupItem-ae").removeClass("hidden");
      APP.router.navigate(`/explore-data/${projectKey}`);
      
      qs("button#save-validate-features").setAttribute("disabled","disabled");
    }
    APP.resetProgress();
  }

  return my; 

}(VALIDATE_FEATURES || {}));

;
/**
 * @module EXPLORE_DATA 
 * @description This module loads and handles the explore data screen
 */
var EXPLORE_DATA = (function(my){
  /**
   * @member {string} STORE_KEY the key used to cache this screen's data in the STORE
   * @public
   */
  my.STORE_KEY="EXPLORE_DATA";

  /**
   * @method getData 
   * @description Call the server's de/exploredata API to retrieve the features data that for this connection, 
   * according to selection in modelcfg and whether it is numerical or cateogrical
   * @param {string} pkey the project key context
   * @return {object} The result object in the API result. 
   * @throws {Error} throws an error if the userHash is null or the project key is null, or any other error in API call
   * @async
   * @public
   */
  my.getData = async function(pkey){
    let summaryurl=SERVER.getBaseAddress() + 'de/exploredata',
        userHash=CREDENTIALS.getUserCreds(),
        projectKey=pkey?pkey:PROJECT.currentProjectKey();

    let storedData=STORE.getProjectData(projectKey, EXPLORE_DATA.STORE_KEY);
    if (storedData){
      return storedData;
    }
    if (useTestData){
      let result=await EXP_DATA.getData();
      STORE.setProjectData(projectKey, my.STORE_KEY, result);
      return result;
    }

    APP.setProgress(i18n.en.APP.UI.FOOTER.PROGRESS.FETCHING_FEATURES);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.USER_NOT_LOGGED_IN_CANNOT_RETRIEVE_PROJECTS+"\n"+i18n.en.APP.UI.ERROR.EXPLORE_DATA.GENERIC);
    }
    if (projectKey == null){
      throw new Error(i18n.en.APP.UI.INFO.EXPLORE_DATA.NOT_IN_CONTEXT_OF_PROJECT);
    }

    let params={
      key: userHash, 
      projectKey: projectKey,
    };
    let summaryresult=null;
    try{
      summaryresult= await SERVER.postData(summaryurl, params);
    } catch (err) {
      summaryresult = null;
    }
    if (summaryresult==null || (summaryresult.status != "success" && !(summaryresult.status >= 200 && summaryresult.status < 300))){
      console.log({summaryresult: summaryresult});
      APP.showError(`${i18n.en.APP.UI.ERROR.EXPLORE_DATA.GENERIC} Please contact an Administrator.`);
      APP.resetProgress();
      let err=new Error(i18n.en.APP.UI.ERROR.EXPLORE_DATA.GENERIC);err.name='GenericError';throw err;
    }
    STORE.setProjectData(pkey, my.STORE_KEY, summaryresult);
    return summaryresult;
  }

  /**
   * @method tabListener 
   * @description the change listener for the hidden radio inputs that control which tab is 
   * shown on screen. Changes the "selected" class on the label that's attached to the radios.
   * @param {Event} evt the change event for the radio button selection
   * @private
   */
  var tabListener=function(evt){
    if (!evt.target.hasClass("tab-input")){return;}
    let tabTriggers=qsa(".tab-trigger[name='explore-data-tab-group']").forEach(x=>x.removeClass("selected"));
    if (evt.target.id=="categorical-input"){
      qs("#categorical-trigger").addClass("selected");
    } else if (evt.target.id=="numerical-input"){
      qs("#numerical-trigger").addClass("selected");
    }
    qs("#explore-summary-tabs-content-container input.tab-input:checked+.tab-content .explore-data-table-container").fixedTable.relayout();
  }

  /**
   * @method initListeners 
   * @description remove and re-register the tab listener.
   * @private
   */
  var initListeners=function(){
    qs("#explore-summary-tabs-content-container").removeEventListener("change", tabListener);
    qs("#explore-summary-tabs-content-container").addEventListener("change", tabListener);
  }

  /**
   * @method exploreData 
   * @description Initialize and load the page. Create the derived objects that populate the tables. Call
   * the table template (generated template from Pug) with these derived data objects as parameters. Add 
   * sorting and filtering capability using list.js
   * @param {string} pkey project key
   * @async
   * @private
   */
  my.exploreData = async function(pkey){ 
    initListeners();
    let summaryresult = await my.getData(pkey);
    let summaryTableData=[];
    let catData={
      keys: ["feature"].concat(Object.keys(summaryresult.data.posts[0].CatStatInfo)),
      colsMap: extend({feature: "Feature Name"}, summaryresult.data.posts[0].CatStatInfo),
      colsArr: ["Feature Name"].concat(Object.keys(summaryresult.data.posts[0].CatStatInfo).map(x=>summaryresult.data.posts[0].CatStatInfo[x])),
      data: Object.keys(summaryresult.data.posts[0].Categorical).map(x=>summaryresult.data.posts[0].Categorical[x]),
      format: ["s", ".2f", "s"],
    };
    let numData={
      keys: ["feature"].concat(Object.keys(summaryresult.data.posts[0].NumStatInfo)),
      colsMap: extend({feature: "Feature Name"}, summaryresult.data.posts[0].NumStatInfo),
      colsArr: ["Feature Name"].concat(Object.keys(summaryresult.data.posts[0].NumStatInfo).map(x=>summaryresult.data.posts[0].NumStatInfo[x])),
      data: Object.keys(summaryresult.data.posts[0].Numerical).map(x=>summaryresult.data.posts[0].Numerical[x]),
      format: ["s", ".2f", ".2f", ".2f", ".2f", ".2f", ".2f"],
    };
    for (let key in summaryresult.data.posts[0]){
      summaryTableData.push(summaryresult.data.posts[0][key]);
    }
    APP.resetProgress();
          
    qsa("#explore-summary-tabs-content-container .tab-content .explore-data-table-container>*").forEach((x, i)=>x.remove());
    qs("#explore-data-catgorical-data .explore-data-table-container").appendChild(createNode(tableTemplate({
      data: catData.data,
      headerText: catData.colsArr,
      headerKeys: catData.keys,
      hasSelectionCol:false,
      hasSelectAll: false,
      hasActionsColumn: false,
      tableAttributes: {
        "class": "fixed-table",
      },
      applyTDStyles: false,
    })));
    qs("#explore-data-numerical-data .explore-data-table-container").appendChild(createNode(tableTemplate({
      data: numData.data,
      headerText: numData.colsArr,
      headerKeys: numData.keys,
      hasSelectionCol:false,
      hasSelectAll: false,
      hasActionsColumn: false,
      tableAttributes: {
        "class": "fixed-table",
      },
      applyTDStyles: false,
    })));

    qsa("#explore-data .explore-data-table-container").forEach(x=>x.fixedTable=fixTable(x));

    my.catlist=new List(qs("#explore-data-catgorical-data"), {valueNames: catData.keys, searchClass: "input-search"});

    my.numlist=new List(qs("#explore-data-numerical-data"), {valueNames: numData.keys, searchClass: "input-search"});

    qsa("#explore-summary-tabs-content-container label.compact").forEach(label => COMPACT_LABEL.registerCompactLabel(label));
    qsa("#explore-summary-tabs-content-container button.saveAsExcel").forEach(button=>{
      let container=button.closest(".table-container");
      container.qs("table").id=container.id+"-table";
    });

  }

  return my; 

}(EXPLORE_DATA || {}));;
/**
 * @module PROC_CHARTS
 * @description draw various processor charts in a container
 */
;var PROC_CHARTS=(function(my){

  /**
   * @member {string} svgNS
   * @description The SVG namespace. Needed for creating an SVG gradient
   * @private
   */
  var svgNS = "http://www.w3.org/2000/svg"; 

  /**
   * @member {object[]} charts
   * @description Array of Proc chart objects created using `c3.js`
   */
  var charts={};

  /**
   * @method createGradient
   * @description Create a filler gradient for the proc chart (green to very dark green)
   * @param {SVGSVGElement} svg SVG object to create to create the gradient into.
   * @param {string} id The ID to set on the gradient node
   * @param {number[]} stops array of `stop` objects {offset:'0%', 'stop-color':'#70cb05'}
   * @property {string} stop.offset percentage of total length to set the stop at
   * @property {string} stop.stop-color color of the stop
   * @private
   */
  var createGradient=function(svg,id,stops){
    var svgNS = svg.namespaceURI;
    var grad  = document.createElementNS(svgNS,'linearGradient');
    grad.setAttribute('id',id);
    for (var i=0;i<stops.length;i++){
      var attrs = stops[i];
      var stop = document.createElementNS(svgNS,'stop');
      for (var attr in attrs){
        if (attrs.hasOwnProperty(attr)) stop.setAttribute(attr,attrs[attr]);
      }
      grad.appendChild(stop);
    }
  
    var defs = svg.querySelector('defs') ||
        svg.insertBefore( document.createElementNS(svgNS,'defs'), svg.firstChild);
    return defs.appendChild(grad);
  };

  /**
   * @method generate
   * @description Create a proc chart.
   * @param {object} options the parameters to be passed to `c3.js` required to specify the chart, as well as some proc chart
   * specific parameters. After creation the chart will be added to the [charts](#~charts) object.
   * @public
   */
  my.generate=function(options){
    let opt={
      bindto: options.selector,
      size: {
        height: options.height,
        width: options.width
      },
      data: {
        // x: 'x',
        columns: [
          // ['x'].concat(options.datax),
          [options.id].concat(options.data)
        ],
        type: 'area',
      },
      axis: {
        y: {
          max: 100,
          min: 0,
          padding: {top: 0, bottom: 0},
          tick:{
            values:options.yTicks
          }
          // Range includes padding, set 0 if no padding needed
          // padding: {top:0, bottom:0}
        },
        x: {
          // type: 'timeseries',
          // tick: {
          //     format: '%M:%S',
          // },
          show: false
        }
      },
      point: {
        show: false
      },
      legend:{
        show: false
      },
      transition: {
        duration: 100
      },
      id:options.id,
      onrendered: function(){//set the gradient in the area graph
        let svg=qs(this.config.bindto).qs("svg"),
            gradid=`${this.config.data_columns[0][0]}Gradient`
        let grad=createGradient(svg,gradid,[
          {offset:'0%', 'stop-color':'#70cb05'},
          {offset:'100%','stop-color':'#000'}
        ]);
        grad.setAttribute("x1", "0");
        grad.setAttribute("x2", "0");
        grad.setAttribute("y1", "0");
        grad.setAttribute("y2", "1");
      }
    };
    opt.data.colors={};
    opt.data.colors[options.id]=`url(#${options.id}Gradient)`;
    charts[opt.id]=c3.generate(opt);
  }

  /**
   * @method getChart
   * @description look up a stored `c3.js` chart object from the [`charts`](#~charts) object
   * @param {string} id the lookup key.
   * @return the `c3.js` chart object for specified chart
   */
  my.getChart=function(id){
    return charts[id];
  };

  return my;
}(PROC_CHARTS || {}));

;
/*global qs, qsa, APP, aeautomodelTemplate, COMPACT_LABEL, createNode, PROC_CHARTS, ACCORDION,
modeldevconfirmationdlgTemplate, STORE, PROJECT, modeldevelopmentTemplate, featureengineeringTemplate,
datatreatmentTemplate, extend, MD_STATS_CHART, useTestData, MD_REPORT_DATA, SERVER, CREDENTIALS,
i18n*/
/**
 * @module AE_AUTOMODEL
 * @description Behavior for the Model Development screen. The API calls it makes 
 * are to the "Start Model Dev" API (/automl/v1/apis/start) and to the
 * "Report" API (/automl/v1/apis/rep). Polls the latter to keep 
 * updating the status of the ModelDev process on screen.
 */

var AE_AUTOMODEL = (function(my){
  /**
   * @member {string} STORE_KEY 
   * @description the key for caching data in the STORE
   * @public
   */
  my.STORE_KEY=AE_AUTOMODEL; //STORE_KEY for caching data in the STORE

  /**
   * @member {object} aeSettings 
   * @description default settings flags for the UI. These keys should be
   * returned by the Start API call.
   * @private
   */
  var aeSettings={ //Default settings to be overridden by output of start model dev API
    CpuInfoAvail: 1,
    StopFuncAail: 1,
    PollingPeriod: 2,
    ProgressBarWeightInfo: {
      DT: 25,
      FE: 25,
      MD: 25,
      MC: 25
    }
  };
  /**
   * @member {array} fillers 
   * @description These are filler paths for dials. The dial is made up of superimposed
   * SVG paths, each of which is 5% longer than the previous (lower) one.
   * @private
   */
  var fillers=[
    "<path id='filler0' value='0' d='m37.157 180.86h1' class='filler'/>",
    "<path id='filler5' value='5' d='m37.157 180.86c-5.516-5.52-10.232-11.53-14.149-17.9' class='filler'/>",
    "<path id='filler10' value='10' d='m37.157 180.86c-11.213-11.22-19.124-24.49-23.731-38.6' class='filler'/>",
    "<path id='filler15' value='15' d='m37.157 180.86c-17.04-17.05-26.452-38.83-28.236-61.11' class='filler'/>",
    "<path id='filler20' value='20' d='m37.157 180.86c-22.847-22.85-31.981-54.23-27.403-83.898' class='filler'/>",
    "<path id='filler25' value='25' d='m37.157 180.86c-28.658-28.67-35.74-70.74-21.248-106.04' class='filler'/>",
    "<path id='filler30' value='30' d='m37.157 180.86c-34.336-34.35-37.7-87.943-10.093-126.06' class='filler'/>",
    "<path id='filler35' value='35' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 1.7801-1.7807 3.612-3.4781 5.4907-5.0923' class='filler'/>",
    "<path id='filler40' value='40' d='m37.157 180.86c-38.065-38.08-38.065-99.813 0-137.89 7.397-7.4 15.688-13.362 24.525-17.885' class='filler'/>",
    "<path id='filler45' value='45' d='m37.157 180.86c-38.065-38.08-38.065-99.813 0-137.89 13.185-13.19 29.208-21.81 46.103-25.862' class='filler'/>",
    "<path id='filler50' value='50' d='m37.157 180.86c-38.065-38.08-38.065-99.813 0-137.89 19.032-19.038 43.976-28.557 68.923-28.557' class='filler'/>",
    "<path id='filler55' value='55' d='m37.157 180.86c-38.065-38.08-38.065-99.813 0-137.89 24.871-24.879 59.838-33.502 91.703-25.869' class='filler'/>",
    "<path id='filler60' value='60' d='m37.157 180.86c-38.065-38.08-38.065-99.813 0-137.89 30.656-30.666 76.653-36.634 113.28-17.903' class='filler'/>",
    "<path id='filler65' value='65' d='m37.157 180.86c-38.065-38.08-38.065-99.813 0-137.89 36.282-36.295 94.053-37.993 132.34-5.095' class='filler'/>",
    "<path id='filler70' value='70' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 38.064-38.076 99.776-38.076 137.84 0.000001 3.7325 3.7337 7.0991 7.6948 10.1 11.839' class='filler'/>",
    "<path id='filler75' value='75' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 38.064-38.076 99.776-38.076 137.84 0.000001 9.4075 9.4103 16.49 20.266 21.248 31.852' class='filler'/>",
    "<path id='filler80' value='80' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 38.064-38.076 99.776-38.076 137.84 0.000001 15.225 15.229 24.36 34.243 27.406 54.014' class='filler'/>",
    "<path id='filler85' value='85' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 38.064-38.076 99.776-38.076 137.84 0.000001 21.027 21.033 30.438 49.285 28.236 76.78' class='filler'/>",
    "<path id='filler90' value='90' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 38.064-38.076 99.776-38.076 137.84 0.000001 26.858 26.866 34.766 65.51 23.723 99.312' class='filler'/>",
    "<path id='filler95' value='95' d='m37.157 180.86c-38.065-38.077-38.065-99.813 0.000001-137.89 38.064-38.076 99.776-38.076 137.84 0.000001 32.55 32.56 37.266 82.419 14.149 119.99' class='filler'/>",
    "<path id='filler100' value='100' d='m37.157 180.86a97.468 97.501 0 0 1 0.000001 -137.89 97.468 97.501 0 0 1 137.84 0.000001 97.468 97.501 0 0 1 0 137.89' class='filler'/>",
  ];

  /** 
   * @function getFiller 
   * @description round the value parameter to the nearest 5, and return the d attribute of the corresponding path 
   * @param value {number} the path to look up
   * @private
   */
  var getFiller = function(value){
    if (value < 0) value=0;
    if (value > 100) value=100;
    value = Math.round(value/5);
    // eslint-disable-next-line no-useless-escape
    return fillers[value].match(/ d=\'([\w\d\.\-\s]*)\'/)[1];
  };

  /**
   * @function prime 
   * @description Prime the page for loading. Housekeeping function 
   * @private
   */
  var prime = function(){
    APP.resetCurrentPageMarker();
    APP.setCurrentPageMarker("AutoModelDev");
    qs("#main-content").setAttribute("class", "");
  };

  /**
   * @function load
   * @description load the model dev screen. Creates dummy proc charts to load in the rhs side bar.
   * If this is called after the model dev is complete it pops up a completion dialog.
   * Else it will update the screen with the report data and start the polling cycle.
   * @param {string} pkey project key for which to load the screen
   * @private
   */
  var load = async function(pkey){
    let automodel=qs("#automodel");
    automodel.innerHTML=aeautomodelTemplate();
    automodel.qsa("label.compact").forEach(label => COMPACT_LABEL.registerCompactLabel(label));
    let w=parseInt(getComputedStyle(qs("#processor-stats")).getPropertyValue("--chart-width")),
      h=parseInt(getComputedStyle(qs("#processor-stats")).getPropertyValue("--chart-height"));

    let report = await my.getReport({projectKey: pkey});
    if (!report || typeof report == "undefined"){
      APP.showWarning("Could not retrieve report from server. Proceeding with default.");
      report=JSON.parse(`{
        "State": "IDLE",
        "StartTime": 0,
        "TotalExecutionTime": 0,
        "Summary": {
          "NumOfRows": "Unknown",
          "NumOfCols": "Unknown",
          "IncidenceRate": "Unknown"
        },
        "ProcessorUtilization": {
          "Enable": "TRUE",
          "Power": 0,
          "GpuTemp": 0,
          "GpuUsage": 0,
          "CpuTemp": 0,
          "CpuUsage": 0
        }
      }`);
    }
    if (report && report.State && report.State.toLowerCase() == "completed"){
      showCompletionDialog();
      return;
    }
    
    // fake processing power charts with random data.
    try{
      PROC_CHARTS.generate({
        yTicks: [0,50,100],
        id: "power",
        selector: "#power",
        width: w,
        height: h,
        data:randomData(100,40,100)
      });
      PROC_CHARTS.generate({
        yTicks: [0,50,100],
        id: "gpu-temp",
        selector: "#gpu-temp",
        width: w,
        height: h,
        data:randomData(100,40,60)
      });
      PROC_CHARTS.generate({
        yTicks: [0,50,100],
        id: "gpu-usage",
        selector: "#gpu-usage",
        width: w,
        height: h,
        data:randomData(100,30,90)
      });
      PROC_CHARTS.generate({
        yTicks: [0,50,100],
        id: "cpu-temp",
        selector: "#cpu-temp",
        width: w,
        height: h,
        data:randomData(100,40,60)
      });
      PROC_CHARTS.generate({
        yTicks: [0,50,100],
        id: "cpu-usage",
        selector: "#cpu-usage",
        width: w,
        height: h,
        data:randomData(100,30,90)
      });
    } catch (err){
      //do nothing;
    }

    /* 
     * The page consists of 3 areas: the completed 1 panel, 
     * the completed 2 panel and the currently processing panel. Populate all
     * three with the content that goes into them. 
     */
    qs("#completed-panel-1").appendChild(createDataTreatmentSection());
    qs("#completed-panel-2").appendChild(createFeatureEngineeringSection());
    qsa("#completed-panel-2 h4").forEach(x=>x.removeClass("running").addClass("show"));
    qs("#current-progress").appendChild(createDataTreatmentSection());
    qs("#current-progress").appendChild(createFeatureEngineeringSection());
    qs("#current-progress").appendChild(createModelDevSection());

    // register for expand collapse functionality for feature-engineering headers
    qsa(".fe-stats h4").forEach(y=>{
      y.addEventListener("click", function(evt){
        if (evt.currentTarget.hasClass("show")){
          evt.currentTarget.removeClass("show");
        } else {
          evt.currentTarget.toggleClass("current");
        }
      });
    });

    // update the ui based on the report received earlier from the API result. 
    // if it modeldev is still running, start polling.
    my.updateProgress(report);
    if (report.State.toLowerCase()=="running"){
      qs("#model-development").addClass("started");
      aeSettings.pkey=pkey;
      updateCapabilities(aeSettings);
      qs("#model-development").addClass("started");
      APP.setProgress("Polling For Report...", false);
      let pr=my.pollReport(null, aeSettings.PollingPeriod<10?10:aeSettings.PollingPeriod);
      pr.then(showCompletionDialog);
      pr.catch(function(report){
        if (!report || !report.State || report.State.toLowerCase()!="interrupted"){
          APP.router.navigate("/");
        }
      });
      APP.resetProgress();
    }
  };

  /**
   * @function showCompletionDialog 
   * @description Like the function says, show the completion dialog.
   * @private
   */
  var showCompletionDialog=function(){
    var dlg = qs("#model-dev-complete-dialog");
    if (!dlg || typeof dlg == "undefined"){
      dlg=createNode(modeldevconfirmationdlgTemplate());
      qs("#dialogs-sleeping").appendChild(dlg);
    }
    // eslint-disable-next-line no-unused-vars
    dlg.qsa("button.close, #next-button").forEach(x=>x.addEventListener("click", _evt=>{//dialog close button
      APP.hideDialog(dlg);
      dlg.remove();
      STORE.setProjectMetadata(PROJECT.currentProjectKey(), AE_AUTOMODEL.STORE_KEY+"_modeldev_complete", true);
      APP.router.navigate("/mp/mll/discrimination");
    }));
    if (!dlg.open) APP.showDialog(dlg);
  };

  /**
   * @function createModelDevSection 
   * @description Call the Pug generated template for the modelDev 
   * section (with the orange and green rects). We just need this one for consistency 
   * with the other two sections.
   * @private
   */
  var createModelDevSection=function(){
    return createNode(modeldevelopmentTemplate());
  };

  /**
   * @function createFeatureEngineeringSection 
   * @description Call the Pug generated template for
   * feature engineering (with the table of progress values and filters). If you wanted
   * to add a new row, this is where you'd need to add it for it to 
   * appear in the UI. The id should match the id in the JSON data.
   * @private
   */
  var createFeatureEngineeringSection=function(){
    return createNode(featureengineeringTemplate({
      fs:[
        {id:"TotalFeatures", name: "Total Features", value:559},
        {id:"IV", name: "Information Value", value:79, progress: 0.6},
        {id:"IV-FCDS", name: "FCDS Method (Categorical)", value:23, progress: 0.6},
        {id:"FS", name: "Fisher Score", value:313, progress: 0.6},
        {id:"FS-FCDS", name: "FCDS Method (Numerical)", value:89, progress: 0.6},
        {id:"FilteredFeatures", name: "Filtered Features", value:112},
        {id:"Bivariate", name: "Bivariate Analysis", value:54, progress: 0.6},
        {id:"RFE", name: "Recursive Feature Elimination", value:25, progress: 0.6},
        {id:"SelectedFeaturesCount", name: "Features Selected", value:25},
      ],
      fe: [
        {id:"OPCA", name: "Oblique Principal Component Analysis", value:19, progress: 0.6},
        {id:"FactorAnalysis", name: "Factor Analysis", value:14, progress: 0.6},
        {id:"ExtractedFeaturesCount", name: "Features Extracted", value:33},
      ],
      fo: [
        {id:"FeatureOptimization", name: "Feature optimization for model improvement", value:7, progress: 0.6},
        {id:"FeatureOptimization", name: "Features Optimized", value:7},
      ]
    }));
  };

  /**
   * @function createDataTreatmentSection 
   * @description Create the markup for the data treatment section
   * using a Pug generated template function for the same. The parameter being passed to the 
   * template has object keys that should match the ones in the JSON data returned by the server.
   * @private
   */
  var createDataTreatmentSection=function(){
    return createNode(datatreatmentTemplate({
      "MissingImputation":{
        "Status":"Not Started",
        "CompletionPerc":0
      },
      "OutlierTreatment":{
        "Status":"Not Started",
        "CompletionPerc":0
      },
      "AnomalyHandling":{
        "Status":"Not Started",
        "CompletionPerc":0
      },
      "Transformation":{
        "Status":"Not Started",
        "CompletionPerc":0
      },
    }));
  };

  /** 
   * @member {object} MutationObserver
   * @description this observer is used to trigger ui updates on change of data attributes 
   * @private
   */
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  /**
   * @member {MutationObserver} aeObserver
   * @description The MutationObserver allows you to keep track of changes to DOM nodes. Three types
   * of changes are trackable: attribute changes, child nodes changes and text content changes.
   * We are interested in attribute changes. This page has lots of data points to show and 
   * the way it updates the whole page without updating each node by name is to use a generic
   * way to update the page. This is done by marking a dom node for watching by giving it the 
   * class "bind". Either it will be a text value change (e.g. percentage value for progress update)
   * or it will be a graphical value change (for example percentage complete of a progress bar)
   * The former is generically indicated by giving it the class "contentValue" alongwith the "bind" 
   * class. This will look up sub-node(s) indicated by the mutated node's "contentTarget" attribute
   * and update its text.
   * Alternatively, based on the type of progress bar, different type of graphical 
   * changes are updated.
   * @private
   */
  var aeObserver=new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type == "attributes" && mutation.attributeName.startsWith("data-")) {
        if (mutation.target.hasClass("contentValue")){
          let target=mutation.target;
          if (mutation.target.getAttribute("contentTarget")){
            target=target.qsa(target.getAttribute("contentTarget"));
            if (!target)return;
          } else {
            target=[target];
          }
          target.forEach(x=>x.innerText=x.getAttribute("data-value"));
        } else if (mutation.target.hasClass("fe-progress-bar")){
          mutation.target.qs(".progress").setAttribute("style", `--progress-value:${parseInt(mutation.target.getAttribute("data-value"))}%`);
          mutation.target.qs(".value").innerText=mutation.target.getAttribute("data-value")+"%";
        } else if (mutation.target.id=="big-progress-dial"){
          updateBigDial();
        } else if (mutation.target.hasClass("bar")){
          mutation.target.qs(".value").innerText=mutation.target.getAttribute("data-value")+"%";
          mutation.target.qs(".progress").style.width=parseInt(mutation.target.getAttribute("data-value"))+"%";
        } else if (mutation.target.hasClass("dial")){
          let target=mutation.target, value=mutation.target.getAttribute("data-value");
          if (mutation.target.tagName.toLowerCase()=="dt"){
            target = mutation.target.nextElementSibling;
          } 
          let filler=target.qs(".filler");
          let blob=target.qs(".blob");
          target.qs("span").innerText=parseInt(value)+"%";
          filler.setAttribute("d", getFiller(parseInt(value)));
          let endpt = filler.getPointAtLength(filler.getTotalLength());
          blob.setAttribute("cx", endpt.x); blob.setAttribute("cy", endpt.y);
        } else if (mutation.target.hasClass("md-model")){
          let value=mutation.target.getAttribute("data-value");
          if (!value){value=0;}
          mutation.target.setAttribute("style", `--progress-value: ${Math.floor(value)}%`);
        }
        let td = qs("#current-progress td#IV-FCDS-value");
        if (td){td.closest("table").setAttribute("style", `--td-offset-left: ${td.offsetLeft}px; --td-offset-top: ${td.offsetTop}px; --td-offset-height: ${td.offsetHeight}px;`); }
      }
    });
  });

  /** 
   * @function updateBigDial 
   * @description update big dial from its data attribute 
   * @private
   */
  var updateBigDial=function(){
    let dial=qs("#big-progress-dial");
    let attrs=dial.attrs();
    let weights={
      dt: parseInt(attrs["data-dt-wt"]),
      fe: parseInt(attrs["data-fe-wt"]),
      md: parseInt(attrs["data-md-wt"]),
      // mc: parseInt(attrs['data-mc-wt']),
    };
    let slices=dial.qsa(".slice");
    weights.total=weights.dt+weights.fe+weights.md;
    let dt=Math.round(parseInt(attrs["data-dt-value"])*slices.length*weights.dt/weights.total/100);
    let fe=Math.round(parseInt(attrs["data-fe-value"])*slices.length*weights.fe/weights.total/100);
    let md=Math.round(parseInt(attrs["data-md-value"])*slices.length*weights.md/weights.total/100);
    slices.forEach(x=>x.removeClass("dt,fe,md"));
    for (let i=0; i<slices.length; i++){
      if (i<dt){slices[i].removeClass("dt,fe,md").addClass("dt");}
      if (i>=dt&&i<dt+fe){slices[i].removeClass("dt,fe,md").addClass("fe");}
      if (i>=dt+fe&&i<dt+fe+md){slices[i].removeClass("dt,fe,md").addClass("md");}
    }
    if (parseInt(attrs["data-fe-value"])==100 && parseInt(attrs["data-dt-value"])==100 && parseInt(attrs["data-md-value"])==100){
      slices[slices.length-1].removeClass("dt,fe,md").addClass("md");
    }
    let overall=`${Math.round((parseFloat(attrs["data-dt-value"])*weights.dt+parseFloat(attrs["data-fe-value"])*weights.fe+parseFloat(attrs["data-md-value"])*weights.md)/weights.total)}%`;
    dial.qs("#progress-text").innerText=overall;
    if (parseInt(overall) != 100){
      dial.qs("#slices").addClass("animate");
    } else {
      dial.qs("#slices").removeClass("animate");
    }
  };

  /** 
   * @function randomData 
   * @description Generate n random data points between min and max
   * @private
   */
  var randomData=function(n, min, max){
    var a=[];
    for(let i=0;i<n;i++){a.push(Math.floor(min+Math.random()*(max-min)));}
    return a;
  };
  /**
   * @method generateRandomData 
   * @description Public access to the randomData function. This is only needed
   * for debugging and testing
   * @public
   */
  my.generateRandomData=randomData;

  /**
   * @method showAutoModel 
   * @description Called from the router. Entrypoint into this module.
   * @param {string} pkey project key
   * @public
   */
  my.showAutoModel = async function(pkey){ 
    prime();
    load(pkey);
    qs("#start-ae").addEventListener("click", async function(){//event listener for the BIG start button.
      let result=await my.start({projectKey: pkey});
      aeSettings=extend(aeSettings, result?result:{});
      aeSettings.pkey=pkey;
      updateCapabilities(aeSettings);
      qs("#model-development").addClass("started");
      APP.setProgress("Polling For Report...", false);
      let pr=my.pollReport(null, aeSettings.PollingPeriod<10?10:aeSettings.PollingPeriod);
      pr.then(showCompletionDialog);
      pr.catch(function(report){
        if (!report || !report.State || report.State.toLowerCase()!="interrupted"){
          APP.router.navigate("/");
        }
      });
      APP.resetProgress();
    });
    observe();
    STORE.setProjectMetadata(PROJECT.currentProjectKey(), AE_AUTOMODEL.STORE_KEY+"_modeldev_loaded", true);
  };

  /**
   * @function observe 
   * @description Reinitialize the MutationObserver. You need this because the observer
   * stays live even when the nodes are disconnected from the DOM. In which case, if you return
   * to this page after going away, the observer will be connected to DOM nodes that aren't 
   * actually visible on the page. <== Mem leak + malfunction.
   * @private
   */
  var observe=function(){
    aeObserver.disconnect();
    qsa(".bind").forEach(x=>aeObserver.observe(x, {attributes: true}));
  };

  /**
   * @function updateCapabilities 
   * @description The server returns some flags for whether processor stats and 
   * stop functionailty is available. set internal UI flags indicating the same.
   * @param {object} options an options object that defaults to aeSettings
   * @private
   */
  var updateCapabilities=function(options){
    options=options?options:aeSettings;
    if (!options.CpuInfoAvail){
      qs("#processor-stats").addClass("unavailable");
    }
    if (!options.StopFuncAail){
      qs("#big-stop-button").addClass("unavailable");
    }
  };

  /**
   * HOW THE POLLING CODE WORKS
   * There's a continuePolling flag that is checked each time the timer is restarted. 
   * When the polling is first started, it returns a Promise that is resoved when the
   * self referential timer hits an exit condition. An exit condition is hit either when
   * the user navigates away from the page, or when the report API return completion
   * status of COMPLETED. In that case the promise is resolved. 
   */

  /**
   * @member {boolean} continuePolling 
   * @description If false, the polling timer will NOT be started on 
   * the next iteration of the timer.
   * @private
   */
  var continuePolling=true;

  /**
   * @method cancelPolling 
   * @description Sets the continuePolling flag false and kills the timer.
   * @private
   */
  var cancelPolling=function(){
    continuePolling=false;
    if (pollTimeoutToken){
      clearTimeout(pollTimeoutToken);
    }
  };

  /**
   * @method unload
   * @description cancels polling for report and deregisters any active listeners
   * @public
   */
  my.unload=function(){
    cancelPolling();
    ACCORDION.deregister("#md-details .accordion-container");
  };

  /**
   * @member {Number} pollTimeoutToken 
   * @description This is the reference that can be used to find the current timeOut that's waiting.
   * @private
   */
  var pollTimeoutToken=null;

  /**
   * @method pollReport 
   * @description Start polling the report API until interrupted by user action or by completion of modelDev
   * #### HOW THE POLLING CODE WORKS
   * There's a continuePolling flag that is checked each time the timer is restarted. 
   * When the polling is first started, it returns a Promise that is resoved when the
   * self referential timer hits an exit condition. An exit condition is hit either when
   * the user navigates away from the page, or when the report API return completion
   * status of COMPLETED. In that case the promise is resolved. 
   * @return {Promise} Returns a promise that is resolved to a completion status. It is 
   * rejected in case of any error or elapse of timeout.
   * @param {Number} timeout If the timer loop is never interrupted it should be stopped in 
   * this much time in milliseconds
   * @param {Number} interval Loop every interval seconds.
   * @public
   */
  my.pollReport=function(timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 6*60*60*1000);
    interval = interval*1000 || 10*1000;
    continuePolling=true;

    var checkCondition = async function(resolve, reject) {
      pollTimeoutToken=null;
      // If the condition is met, we're done! 
      try{
        APP.setProgress("Polling For Report...", false);
        var result = await my.getReport({projectKey: aeSettings.pkey});
        APP.resetProgress();
      } catch(err){
        // eslint-disable-next-line no-console
        console.error("Exception in polling.\n",err);
        APP.showError("Error in retrieving updates from server. Please contact adminitrator.");
        return reject(err);
      }
      if (!result || typeof result == "undefined"){
        // eslint-disable-next-line no-console
        console.error("Null result in polling.");
        return reject(new Error("Error in retrieving updates from server. Please contact adminitrator."));
      }
      // If the condition isn't met but the timeout hasn't elapsed, go again
      else if (Number(new Date()) < endTime) {
        my.updateProgress(result);
        // if (result.ModelDev.Status.toLowerCase()=="completed" || result.State.toLowerCase() == "completed" || parseInt(result.ModelDev.CompletionPerc) == 100){
        //   resolve(result);
        // }
        try{
          if (result.ModelDev.Status.toLowerCase()=="completed"){
            return resolve(result);
          }
        }catch(err){
          //do nothing
        }
        if (continuePolling){
          pollTimeoutToken=setTimeout(checkCondition, interval, resolve, reject);
        } else {
          continuePolling=true;
          return reject({State: "interrupted"});
        }
      }
      // Didn't match and too much time, reject!
      else {
        return reject(new Error("timed out for " + my.pollReport + ": " + arguments));
      }
    };

    return new Promise(checkCondition);
  };

  /**
   * @method updateProgress 
   * @description On receipt of data from the server (during polling) this is called with the
   * result data object to update the attributes on all the DOM nodes that are responsible for displaying
   * the associated data, either as numbers or as graphs/progress indicators. This will trigger the 
   * MutationObserver that in turn updates the UI. This method is public because it sometimes needs to
   * be called from the devtools during development, adding of new values etc. 
   * @param {object} data The result data from the getReport() call
   * @public
   */
  my.updateProgress=function(data){
    observe();
    let stageClasses = createNode("<div></div>");
    try{
      // qs("#stages").removeClass("fe,md").addClass("dt");
      stageClasses.removeClass("fe,md").addClass("dt");
      // qs("#target-feature option.bind").setAttribute("data-value", data.Summary.TargetFeature);
      // qs("#data-source option.bind").setAttribute("data-value", data.Summary.DataSource);
      if (!data.Summary.TuneParam || data.Summary.TuneParam.length == 0){
        data.Summary.TuneParam=["AUC"];
      }
      data.Summary.TuneParam.forEach((x, i)=>{
        let clone=qs("#tuning-params option.template").cloneNode();
        if (i == 0){
          clone.setAttribute("selected","selected");
        }
        clone.removeAttribute("style");
        clone.setAttribute("value", x.toLowerCase().replace(/\s/g, "_"));
        clone.setAttribute("data-value", x.toLowerCase().replace(/\s/g, "_"));
        clone.innerText=x;
        qs("#tuning-params select").appendChild(clone);
      });
      if (!data.Summary.Dataset){
        data.Summary.Dataset=["Training"];
      }
      if (!Array.isArray(data.Summary.Dataset)){
        data.Summary.Dataset=[data.Summary.Dataset];
      }
      data.Summary.Dataset.forEach((x, i)=>{
        let clone=qs("#data-source option.template").cloneNode();
        if (i==0){
          clone.setAttribute("selected", "selected");
        }
        clone.removeAttribute("style");
        clone.setAttribute("value", x.toLowerCase().replace(/\s/g, "_"));
        clone.setAttribute("data-value", x.toLowerCase().replace(/\s/g, "_"));
        clone.innerText=x;
        qs("#data-source select").appendChild(clone);
      });
      qs("#incidence-rate").setAttribute("data-value", parseFloat(data.Summary.IncidenceRate).toFixed(5));
      qs("#numOfRows").setAttribute("data-value", data.Summary.NumOfRows);
      qs("#numOfCols").setAttribute("data-value", data.Summary.NumOfCols);
      qs("#dv").setAttribute("data-value", data.Summary.dv);
      //time format is 0:01:10.739611
      let tb=null, ts="";
      if (data && data.TotalExecutionTime){
        // eslint-disable-next-line no-useless-escape
        tb=data.TotalExecutionTime.match(/([\d]+)\:([\d]+)\:([\d]+)\.([\d]+)/);//Regex to tokenize time spent hh:mm:ss.xxx
        ts=`${tb[1]}h ${tb[2]}m ${tb[3]}s`;
        ts=ts.replace(/0[hms]\s/, "");
        qs("#time-running").setAttribute("data-value", ts);
      }
      try{//add more fake data to the fake proc charts
        PROC_CHARTS.getChart("power").flow({columns:[["power"].concat([data.ProcessorUtilization.Power?data.ProcessorUtilization.Power:randomData(1, 40, 100)[0]])]});
        PROC_CHARTS.getChart("gpu-temp").flow({columns:[["gpu-temp"].concat([data.ProcessorUtilization.GpuTemp?data.ProcessorUtilization.GpuTemp:randomData(1, 40, 60)[0]])]});
        PROC_CHARTS.getChart("gpu-usage").flow({columns:[["gpu-usage"].concat([data.ProcessorUtilization.GpuUsage?data.ProcessorUtilization.GpuUsage:randomData(1, 30, 90)[0]])]});
        PROC_CHARTS.getChart("cpu-temp").flow({columns:[["cpu-temp"].concat([data.ProcessorUtilization.CpuTemp?data.ProcessorUtilization.CpuTemp:randomData(1, 40, 60)[0]])]});
        PROC_CHARTS.getChart("cpu-usage").flow({columns:[["cpu-usage"].concat([data.ProcessorUtilization.CpuUsage?data.ProcessorUtilization.CpuUsage:randomData(1, 30, 90)[0]])]});
      }catch(err){
        //do nothing
      }

      //update data-treatment
      let dt=extend({
        MissingImputation: 0,
        OutlierTreatment: 0,
        AnomalyHandling: 0,
        Transformation: 0,
        total: 0
      },{
        MissingImputation: data.DataTreatment.MissingImputation.CompletionPerc,
        OutlierTreatment: data.DataTreatment.OutlierTreatment.CompletionPerc,
        AnomalyHandling: data.DataTreatment.AnomalyHandling.CompletionPerc,
        Transformation: data.DataTreatment.Transformation.CompletionPerc,
      });
      dt.total = (
        dt.MissingImputation*aeSettings.ProgressBarWeightInfo.DT+
                  dt.OutlierTreatment*aeSettings.ProgressBarWeightInfo.FE+
                  dt.AnomalyHandling*aeSettings.ProgressBarWeightInfo.MD+
                  dt.Transformation*aeSettings.ProgressBarWeightInfo.MC
      )/(
        aeSettings.ProgressBarWeightInfo.DT+
                  aeSettings.ProgressBarWeightInfo.FE+
                  aeSettings.ProgressBarWeightInfo.MD+
                  aeSettings.ProgressBarWeightInfo.MC
      );
      qsa("dt.dial.dt.bind").forEach(x=>x.setAttribute("data-value", Math.round(dt.total)));//all the blue dials
      qs("#current-progress-dial").setAttribute("data-value", `${Math.round(dt.total)}%`);
      qs("#big-progress-dial").setAttribute("data-dt-value", `${Math.floor(dt.total)}%`);
      //data treatment progressbars
      for (let dtstage in dt){
        qsa(`#current-progress .data-treatment .${dtstage}.bind, .completed-panel .data-treatment .${dtstage}.bind`).forEach(x=>x.setAttribute("data-value", Math.round(dt[dtstage])));
      }
      if (Math.round(parseFloat(""+dt.total))<100){qs("#stages").removeClass("fe,md,dt").addClass(stageClasses.className);return;}
      //feature engineering values
      data.FeatureEngineering.CompletionPerc=(parseFloat(data.FeatureEngineering.FeatureSelection.CompletionPerc)*6+parseFloat(data.FeatureEngineering.FeatureExtraction.CompletionPerc)*2+parseFloat(data.FeatureEngineering.FeatureOptimization.CompletionPerc))/9;
      if (!data.FeatureEngineering.Status){
        data.FeatureEngineering.Status="Running";
        if (data.FeatureEngineering.FeatureSelection.Status.toLowerCase()=="completed" && 
            data.FeatureEngineering.FeatureExtraction.Status.toLowerCase()=="completed" &&
            data.FeatureEngineering.FeatureOptimization.Status.toLowerCase()=="completed"){data.FeatureEngineering.Status="COMPLETED";}
        if (data.FeatureEngineering.FeatureSelection.Status.toLowerCase()=="not started" && 
            data.FeatureEngineering.FeatureExtraction.Status.toLowerCase()=="not started" &&
            data.FeatureEngineering.FeatureOptimization.Status.toLowerCase()=="not started"){data.FeatureEngineering.Status="Not Started";}
      }
      
      if (data.FeatureEngineering.CompletionPerc > 0){
        //qs("#stages").removeClass("dt,md").addClass("fe");
        stageClasses.removeClass("dt,md").addClass("fe");
        qs("#current-progress-dial").setAttribute("data-value", `${Math.round(parseFloat((data.FeatureEngineering.CompletionPerc)))}%`);
        qs("#completed-panel-1").addClass("show");
      }
      qs("#big-progress-dial").setAttribute("data-fe-value", `${Math.floor(parseFloat((data.FeatureEngineering.CompletionPerc)))}%`);
      qsa("dt.dial.fe.bind").forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.FeatureEngineering.CompletionPerc)))));//all the beige dials
      // qsa(".fe-stats h4.current").forEach(x=>x.removeClass("current"));
      // qsa(".fe-stats h4.FeatureSelection").forEach(x=>x.addClass("current"));
      // data.FeatureEngineering.FeatureSelection.SelectedFeaturesCount=0;
      // ["Bivariate", "RFE"].forEach(m=>data.FeatureEngineering.FeatureSelection.SelectedFeaturesCount+=data.FeatureEngineering.FeatureSelection.SubSteps[m].SelectedFeaturesCount);
      qsa(".fe-stats tr.TotalFeatures .bind").forEach(x=>x.setAttribute("data-value", data.FeatureEngineering.TotalFeatures));
      if(!data.FeatureEngineering.FeatureSelection.FilteredFeatures){
        data.FeatureEngineering.FeatureSelection.FilteredFeatures=data.FeatureEngineering.FeatureSelection.SubSteps["IV-FCDS"].SelectedFeaturesCount + data.FeatureEngineering.FeatureSelection.SubSteps["FS-FCDS"].SelectedFeaturesCount;
      }
      qsa(".fe-stats tr.FilteredFeatures .bind").forEach(x=>x.setAttribute("data-value", data.FeatureEngineering.FeatureSelection.FilteredFeatures));
      qsa(".fe-stats tr.SelectedFeaturesCount .bind").forEach(x=>x.setAttribute("data-value", data.FeatureEngineering.FeatureSelection.SelectedFeaturesCount));
      ["IV", "IV-FCDS", "FS", "FS-FCDS", "Bivariate", "RFE"].forEach(m=>{
        qsa(`.fe-stats tr.${m} .fe-value.bind`).forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.FeatureEngineering.FeatureSelection.SubSteps[m].SelectedFeaturesCount)))));  
        qsa(`.fe-stats tr.${m} .fe-progress-bar.bind`).forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.FeatureEngineering.FeatureSelection.SubSteps[m].CompletionPerc)))));  
      });
      // qsa(".fe-stats h4.FeatureExtraction").forEach(x=>{
      //   if (data.FeatureEngineering.FeatureExtraction.CompletionPerc>0 || data.FeatureEngineering.FeatureExtraction.Status.toLowerCase() == "running"){
      //     qsa(".fe-stats h4.current").forEach(y=>y.removeClass("current"));
      //     x.addClass("current");
      //   }
      // });
      qsa(".fe-stats tr.ExtractedFeaturesCount .bind").forEach(x=>x.setAttribute("data-value", data.FeatureEngineering.FeatureExtraction.ExtractedFeaturesCount));
      ["OPCA", "FactorAnalysis"].forEach(m=>{
        qsa(`.fe-stats tr.${m} .fe-value.bind`).forEach(x=>x.setAttribute("data-value", data.FeatureEngineering.FeatureExtraction.SubSteps[m].SelectedFeaturesCount));  
        qsa(`.fe-stats tr.${m} .fe-progress-bar.bind`).forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.FeatureEngineering.FeatureExtraction.SubSteps[m].CompletionPerc)))));  
      });
      // qsa(".fe-stats h4.FeatureOptimization").forEach(x=>{
      //   if (data.FeatureEngineering.FeatureOptimization.CompletionPerc>0 || data.FeatureEngineering.FeatureOptimization.Status.toLowerCase() == "running"){
      //     qsa(".fe-stats h4.current").forEach(y=>y.removeClass("current"));
      //     x.addClass("current");
      //   }
      // });
      qsa(".fe-stats tr.FeatureOptimization .bind").forEach(x=>x.setAttribute("data-value", data.FeatureEngineering.FeatureOptimization.OptimizedFeaturesCount));
      qsa(".fe-stats tr.FeatureOptimization .fe-progress-bar.bind").forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.FeatureEngineering.FeatureOptimization.CompletionPerc)))));  
      if (Math.round(parseFloat(""+data.FeatureEngineering.CompletionPerc)) < 100){
        qs("#stages").removeClass("fe,md,dt").addClass(stageClasses.className);
        return;
      }

      //model development values
      
      
      // qsa("dt.dial.md.bind").forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.ModelDev.CompletionPerc)))));//all the orange dials
      // qs("#big-progress-dial").setAttribute("data-md-value", `${Math.round(parseFloat((data.ModelDev.CompletionPerc)))}%`);
      // qs("#current-progress-dial").setAttribute("data-value", `${Math.round(parseFloat((data.ModelDev.CompletionPerc)))}%`);
      // Confirmed by AMIT that it is OK to assume these models.
      let models=["RF", "GBM", "XG", "ANN", "LRM", "ANNLBGFS", "ANNSGD", "ANNADAM1"],
        completedModelCount=0, runningModelCount=0, totalModelCount=0;
      models.forEach(m=>{
        let model=qs(`#md-stats #${m}.bind`);
        let stats=data.ModelDev.ModelInfo[m];
        if (!stats){model.addClass("unavailable"); qs("#stages").removeClass("fe,md,dt").addClass(stageClasses.className); return;} 
        model.setAttribute("data-value", Math.round(parseFloat(stats.CompletionPerc)));
        if (stats.Status.toLowerCase() == "not started"){
          totalModelCount+=parseFloat(stats.TotalModels);
        } else if (stats.Status.toLowerCase() == "done"){
          totalModelCount+=parseFloat(stats.TotalModels);
          completedModelCount+=parseFloat(stats.TotalModels);//parseFloat(stats.CompletedModels);
          model.removeClass("running,unavailable").addClass("ready");
        } else {
          model.removeClass("ready,unavailable").addClass("running");
          let thisTotalModels=parseFloat(stats.TotalModels);
          let thisCompletedModels=Math.round(thisTotalModels*parseFloat(stats.CompletionPerc)/100);//parseFloat(stats.CompletedModels);
          totalModelCount+=thisTotalModels;
          completedModelCount+=thisCompletedModels;
          runningModelCount+=(thisTotalModels-thisCompletedModels);
        }
      });
      let i=0;
      let tinyboxes=qsa("#tiny-boxes .tiny-box");
      let compProp=completedModelCount*tinyboxes.length/totalModelCount;
      let runningProp=runningModelCount*tinyboxes.length/totalModelCount;
      let levels=[20, 50, 75];
      for (i=0; i<tinyboxes.length; i++){
        tinyboxes[i].removeClass("ready, running, not-started");
        if (i<Math.round(compProp)){
          tinyboxes[i].addClass("ready");
        } else if (i>=Math.round(compProp) && i<Math.round(compProp+runningProp)){
          tinyboxes[i].addClass("running").setAttribute("style", `--fill:${levels[Math.floor(Math.random()*3)]}%`);
        } else {
          tinyboxes[i].addClass("not-started");
        }
      }
      qs("#md-subtext .text.running").setAttribute("data-value", ""+Math.round(runningProp));
      qs("#md-subtext .text.total").setAttribute("data-value", ""+Math.round(totalModelCount));
      if (totalModelCount>0){
        data.ModelDev.CompletionPerc=completedModelCount*100/totalModelCount;
      } else {
        data.ModelDev.CompletionPerc=0;  
      }

      qsa("dt.dial.md.bind").forEach(x=>x.setAttribute("data-value", Math.round(parseFloat((data.ModelDev.CompletionPerc)))));//all the orange dials
      qs("#big-progress-dial").setAttribute("data-md-value", `${Math.floor(parseFloat((data.ModelDev.CompletionPerc)))}%`);
      qs("#current-progress-dial").setAttribute("data-value", `${Math.round(parseFloat((data.ModelDev.CompletionPerc)))}%`);
      if (data.ModelDev.CompletionPerc > 0 || data.ModelDev.Status.toLowerCase() == "running"){
        // qs("#stages").removeClass("dt,fe").addClass("md");
        stageClasses.removeClass("dt,fe").addClass("md");
        qsa(".completed-panel").forEach(x=>x.addClass("show"));
      } else {
        qs("#stages").removeClass("fe,md,dt").addClass(stageClasses.className);
        return;
      }
    } catch (err) {
      APP.showWarning("Missing information in update report.");
      qs("#stages").removeClass("fe,md,dt").addClass(stageClasses.className);
      // eslint-disable-next-line no-console
      console.log(err);
    }
    qs("#stages").removeClass("fe,md,dt").addClass(stageClasses.className);
  };

  /**
   * @method getReport 
   * @description Make a fetch() call to the API server for fetching the report. 
   * This function will wait until a result is returned. This is public only for development
   * purposes, to enable being called from devtools
   * @return {object} result object of the report API
   * @param {object} iparams contains the userHash as "key" and project key as "projectKey".
   * @public
   */
  my.getReport=async function(iparams){
    if (useTestData){
      let rep=await MD_REPORT_DATA.getReport();
      return rep;
    }
    let url=SERVER.getBaseAddress() + "rep";
    let userHash=CREDENTIALS.getUserCreds();
    // APP.setProgress("Polling For Report...");
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);

    let result=null;
    try{
      result=await SERVER.postData(url, params);
    } catch (err) {
      result=null;
    }
    // APP.resetProgress();
    // eslint-disable-next-line no-console
    console.log(result);
    return result;
  };

  /**
   * @method start 
   * @description Start the modelDev process by making a fetch() call to the API server.
   * This function will wait until a response from the server.
   * @return {object} A capabilities object on success.
   * @param {object} iparams contains the userHash as "key" and project key as "projectKey".
   * @public
   */
  my.start=async function(iparams){
    let url=SERVER.getBaseAddress() + "start";
    let userHash=CREDENTIALS.getUserCreds();
    APP.setProgress("Starting project...");
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);

    let result=null;
    try{
      if (useTestData){
        result=await MD_REPORT_DATA.start();
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    APP.resetProgress();
    // eslint-disable-next-line no-console
    console.log(result);
  };

  return my; 

}(AE_AUTOMODEL || {}));

;
/**
 * @module ML_LEADERBOARD
 * @description Renders the Machine Learning leaderboard page that allows the user to compare the
 * different models for their training and test data and their performance using various [`CHART`](module-CHART.html)s.
 */
var ML_LEADERBOARD = (function(my){
  /**
   * @member {string} STORE_KEY 
   * @description the key for caching data in the STORE
   * @public
   */
  my.STORE_KEY="ML_LEADERBOARD";

  /**
   * @member {object} charts
   * @description Stores the chart objects created using `d3.js` or `c3.js`.
   * @private
   */
  var charts={};

  /**
   * @member {Element} separator
   * @description The DOM element that acts as the draggable separator between the table and the charts area.
   * @private
   */
  var separator=null;

  /**
   * @member {boolean} dragging
   * @description While the user is dragging the [separator](#~separator) with the mouse, this variable is `true`.
   * @private
   */
  var dragging=false;

  /**
   * @member {number} originalLHSWidth
   * @description stores the width of the table area when the view first comes up. This is used to restrict 
   * the dragging of the separator to this original size.
   * @private
   */
  var originalLHSWidth=null;
  
  /**
   * @member {boolean} generated
   * @description Stores whether the graphs have been generated for the currently selected model. This is so
   * that the graph need not be generated again if a page change (between graphs) has happened, but no change 
   * in model selection or source selection has happened.
   * @private
   */
  var generated=false;

  /**
   * @member {string} dataSource
   * @description Whether the current view is for the "test" or "training" data.
   * @public
   */
  my.dataSource="test";

  /**
   * @member {object} graphdata
   * @description Cache the data for the graphs between page context switches between graph pages.
   * @private
   */
  var graphdata=null;

  /**
   * @method prime
   * @description Primes this view, adds the view's HTML from its JS Pug template into the DOM.
   * Registers listeners.
   * @private
   */
  var prime = function(){
    qs("#leaderboard").innerHTML=mpmlleaderboardTemplate();
    registerListeners();
  }

  /**
   * @method resizeListener
   * @description window resize listener for redrawing graphs on zoom
   * @params evt resize event
   * @private
   */
  var resizeListener = function(evt){
    my.redrawGraphs();
  };

  /**
   * @method registerListeners
   * @description Register listeners for: 
   * * separator drag-and-drop
   * * source selection
   * * window resizing
   * @private
   */
  var registerListeners = function(){
    let leaderboard=qs("#ml-leaderboard");
    separator=leaderboard.qs(".separator");

    //splitter drag listener
    leaderboard.addEventListener("mousedown", evt=>{
      if (evt.target==separator && evt.buttons&1 == 1){
        dragging=true;
        if (originalLHSWidth==null){originalLHSWidth=qs("#ml-table-outer-container").offsetWidth;}
      }
    });
    leaderboard.addEventListener("mouseup", evt=>{
      if (!dragging) return;
      dragging=false; 
      requestAnimationFrame(my.redrawGraphs);
    });
    leaderboard.addEventListener("mousemove", evt=>{
      if (dragging){
        let lb=qs("#ml-leaderboard");
        let oldValue=parseInt(window.getComputedStyle(lb).getPropertyValue("--graph-area-delta"));
        if(originalLHSWidth+oldValue<410 && evt.movementX<0){return;}//don't reduce below 400px lhs
        leaderboard.style.setProperty("--graph-area-delta", oldValue+evt.movementX);
      }
    });

    if (!my.windowListenerAdded){
      window.addEventListener("resize", resizeListener);
      my.windowListenerAdded=true;
    }
    

    leaderboard.qs("#sourceSelect").addEventListener("change", evt=>{
      my.dataSource=evt.target.value;
      generated=false;
      requestAnimationFrame(my.generateGraphs);
    });
  }

  /**
   * @method load
   * @description load the page's template and add the scope markers for the CSS. load the data for this page, 
   * either from the plot/ API or from the STORE.
   * @param {string} pkey project key which is the context for this view.
   * @async
   * @private
   */
  var load=async function(pkey){
    APP.resetCurrentPageMarker();
    // APP.setCurrentPageMarker("ml-leaderboard");
    qs("#main-content").setAttribute("class", "");
    qs("#main-content").addClass("ml-leaderboard");
    let projectKey=pkey?pkey:PROJECT.currentProjectKey();
    graphdata=STORE.getProjectData(projectKey, ML_LEADERBOARD.STORE_KEY);
    if (!graphdata){
      graphdata=await loadData({projectKey: pkey});
      STORE.setProjectData(projectKey, ML_LEADERBOARD.STORE_KEY, graphdata);
      STORE.setProjectMetadata(projectKey, ML_LEADERBOARD.STORE_KEY+"_graphdata_loaded", true);
    }
    prime();
  }

  /**
   * @method unload
   * @description deregisters any active listeners
   * @public
   */
  my.unload=function(){
    if (my.windowListenerAdded){
      window.removeEventListener("resize", resizeListener);
      delete my.windowListenerAdded;
    }
  };

  /**
   * @method show
   * @description Load and show the correct graph page:
   * * Load the data
   * * Activate the correct graph page
   * * Mark the graph dirty
   * * Generate the graphs in a non-blocking manner
   * @param {string} viewName One of "discrimination", "calibration", or "fprAndPA"
   * @param {string} pkey The project ID of the project in context
   * @async
   * @public
   */
  my.show=async function(viewName, pkey){
    console.log("showing...");
    await load(pkey);

    loadModelsTable();
    qsa("#ml-leaderboard #graph-area .active").forEach(x=>x.removeClass("active"));
    qs(`#ml-leaderboard #graph-area #${APP.getCurrentPageEndToken()}`).addClass("active");
    generated=false;
    requestAnimationFrame(my.generateGraphs);
  }

  /**
   * @method loadModelsTable
   * @description populate the LHS table with names of the models
   * @private
   */
  var loadModelsTable = function(){
    if (qs("#ml-leaderboard .tableContainer td")){return;}
    let html='';
    Object.keys(graphdata).forEach(x=>{
      html+=addTableRow({
        type: graphdata[x].platform.toLowerCase(),
        id: x.toLowerCase(),
        name: graphdata[x].name
      });
    });
    qs("#ml-leaderboard .tableContainer table tbody").innerHTML=html;
    qs("#ml-table-outer-container tbody tr:first-child td").addClass("selected");
  }

  /**
   * @method addTableRow
   * @description Use the data in `row` to generate a table row HTML for rendering the LHS table.
   * @param {object} row 
   * @property {string} row.type "SPARK", "H2O" etc
   * @property {string} row.id "LRM", "DRF", "GBM" etc.
   * @property {string} rown.name Full name of the model "Generalized Linear Regression", "Distributed Random Forest" etc.
   * @private
   */
  var addTableRow = function(row){
    return `
      <tr>
        <td class='type-${row.type}' id='${row.id}' data-type='${row.type}'><a href='javascript:ML_LEADERBOARD.selectRow("${row.id}");'>${row.name}</a></td>
      </tr>`;
  }

  /**
   * @method selectRow
   * @description Called from the row click listener to update the RHS graph area with a new model selection.
   * @param {string} modelID "LRM", "DRF", "GBM" etc.
   * @public
   */
  my.selectRow = function(modelID){
    qsa('#ml-leaderboard .tableContainer td.selected').forEach(x=>x.removeClass("selected"));
    qs(`#ml-leaderboard .tableContainer td#${modelID}`).addClass("selected");
    generated=false;
    requestAnimationFrame(my.generateGraphs);
  }

  /**
   * @method redrawGraphs
   * @description Ask `d3.js` or `c3.js` to redraw the graphs with the data they already have. Needed in case of
   * resizing.
   * @public
   */
  my.redrawGraphs=function(){
  CHART.allowedCharts[APP.getCurrentPageEndToken()].forEach(x=>{
      let chartElement=charts[x].element;
      if (charts[x].isD3Chart){
        chartElement=charts[x].element.node();
      }
      if (!chartElement.closest(".graphs-outer-area").hasClass("active")){
        return;
      }
      let outerContainer=chartElement.closest(".graph-outer-container");
      charts[x].resize({
        width: outerContainer.offsetWidth - 30,
        height: outerContainer.offsetHeight - outerContainer.qs("h4").offsetHeight - 22
      });
    });
  };

  /**
   * @method generateGraphs
   * @description Depending on the last token in the URL hash, which indicates which set of graphs 
   * need to be drawn, discrimination, calibration or fpr, the correct set of graphs will be called to
   * be rendered using the correct data from [graphData](#~graphData). In case of the FPR and Precision 
   * Analysis charts, the Probability Levels table is populated right here instead of in its own Graph
   * module.
   * @param {string} modelID "LRM", "DRF", "GBM" etc.
   * @public
   */
  my.generateGraphs=function(modelID){
    if (!modelID || typeof modelID != "string"){
      let selectedTD=qs("#ml-table-outer-container td.selected");
      if (selectedTD){
        modelID = selectedTD.id;
      } else {
        modelID=qs("#ml-table-outer-container tr:first-child td").id;
      }
    }
    Object.keys(graphdata).forEach(x=>{
      if (x.toLowerCase()==modelID){
        modelID=x;
      }
    });
    if (generated){
      return;
    }
    switch(APP.getCurrentPageEndToken()){
      case "discrimination":
        charts[ROC_CHART.type]=ROC_CHART.generate({
          data:{
            y1:{
              name: "ROC",
              values: graphdata[modelID][my.dataSource].Roc.yPoints,
              keys: graphdata[modelID][my.dataSource].Roc.xPoints,
            },
            auc: graphdata[modelID][my.dataSource].Roc.score
          }
        });
        charts[KS_CHART.type]=KS_CHART.generate({
          data:{
            score: graphdata[modelID][my.dataSource].KS.score,
            y1:{
              name: "y",
              values: graphdata[modelID][my.dataSource].KS.yPoints,
              keys: graphdata[modelID][my.dataSource].KS.xPoints,
            },
            y2:{
              name: "ydash",
              values: graphdata[modelID][my.dataSource].KS.yDashPoints,
              keys: graphdata[modelID][my.dataSource].KS.xDashPoints
            }
          }
        });
        charts[LIFT_CHART.type]=LIFT_CHART.generate({
          data:{
            y1:{
              name: "y",
              values: graphdata[modelID][my.dataSource].DecileLift.yPoints,
              keys: graphdata[modelID][my.dataSource].DecileLift.xPoints,
            }
          }
        });
        if (charts[DISCRIMINATION_CHART.type]){charts[DISCRIMINATION_CHART.type].clear();}
        requestAnimationFrame(function(){
          charts[DISCRIMINATION_CHART.type]=DISCRIMINATION_CHART.generate({
            score: graphdata[modelID][my.dataSource].Discrimination.score?graphdata[modelID][my.dataSource].Discrimination.score.toFixed(4):0,
            data:{
              y1:{
                name: "0",
                values: graphdata[modelID][my.dataSource].Discrimination.xPoints,
                keys: []
              },
              y2:{
                name: "1",
                values: graphdata[modelID][my.dataSource].Discrimination.yPoints,
                keys: []
              }
            }
          });
        });
        generated=true;
        break;
      
      case 'calibration':
        charts[CALIBRATION_CHART.type]=CALIBRATION_CHART.generate({
          data:{
            y1:{
              name: "Reliability",
              values: graphdata[modelID][my.dataSource].CalibrationInfo.yPoints,
              keys: graphdata[modelID][my.dataSource].CalibrationInfo.xPoints,
            },
            score: graphdata[modelID][my.dataSource].CalibrationInfo.score,
            scoreName: modelID,
          }
        });
        generated=true;
        requestAnimationFrame(function(){
          my.redrawGraphs();
          d3.select(".c3-legend-item-Reliability text").text(`${graphdata[modelID].name}, score=${(d3.format(".3f"))(graphdata[modelID][my.dataSource].CalibrationInfo.score)}`);
        });
        break;
      
      case 'fprAndPA':
        probData=graphdata[modelID][my.dataSource].probStats.map((x, i)=>{x.rowIndex=i; return x;});
        probData=probData.sort(function(x1, x2){
          return x1.probLevel<x2.probLevel?-1:(x1.probLevel>x2.probLevel?1:0);
        });
        let table=PROB_LEVELS.generate({data: probData});
        table.addEventListener("click", evt=>{
          if (evt.target.closest("thead")){return;}
          table.qsa("tr.selected").forEach(x=>x.removeClass("selected"));
          evt.target.closest("tr").addClass("selected");
          updateConfusionMatrix({
            "modelID": modelID,
          });
        });
        table.qs("tbody tr:first-child").addClass("selected");
        updateConfusionMatrix({
          "modelID": modelID,
        });
        charts[PRECISION_CHART.type]=PRECISION_CHART.generate({
          data:{
            y1:{
              name: "Reliability",
              values: graphdata[modelID][my.dataSource].PrecisionInfo.yPoints,
              keys: graphdata[modelID][my.dataSource].PrecisionInfo.xPoints,
            }
          }
        });
        let ogiveKeys=graphdata[modelID][my.dataSource].probStats.map(x=>x.probLevel);
        charts[OGIVE_CHART.type]=OGIVE_CHART.generate({
          data: {
            y1:{
              name: "Specificity",
              values: graphdata[modelID][my.dataSource].probStats.map(x=>x.spec/100),
              keys: ogiveKeys
            },
            y2:{
              name: "Sensitivity",
              values: graphdata[modelID][my.dataSource].probStats.map(x=>x.sens/100),
              keys: ogiveKeys
            },
          }
        });
        generated=true;
        break;

    }
  }

  /**
   * @method updateConfusionMatrix
   * @description Update the confusion matrix depening on the table row selected in the probability levels table
   * @param {object} opts contains the modelID that's the context for the graphs
   * @property {string} opts.modelID model selected in the LHS table.
   * @private
   */
  var updateConfusionMatrix=function(opts){
    let tr=qs("#probLevels table tr.selected");
    if (!tr || typeof tr == "undefined"){
      tr=qs("#probLevels table tbody tr:first-child");
      tr.addClass("selected");
    }
    let rowIndex=parseInt(tr.getAttribute("data-rowIndex"));
    let data={};
    if (rowIndex==-1){
      data=JSON.parse('{"probLevel":0.01,"tpr":0,"tnr":0,"fpr":0,"fnr":0,"sens":0,"spec":0,"accu":0,"prec":0,"confMatrix":{"nf_nf":0,"nf_f":0,"f_nf":0,"f_f":0},"rowIndex":0}');
    } else {
      data=graphdata[opts.modelID][my.dataSource].probStats[rowIndex];
    }
    CONFUSION_MATRIX.generate({"data": data});
  }

  /**
   * @method loadData
   * @description Loads the data from the plot API on the server and returns it
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project for which to get scores
   * @return {object} Raw graph data obtained from the plot API.
   * @private
   * @async
   */
  var loadData=async function(iparams){
    if (useTestData){
      let result=await MP_TEST_DATA.getData();
      return result;
    }
    let url=SERVER.getBaseAddress() + 'plot';
    let userHash=CREDENTIALS.getUserCreds();
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);

    APP.setProgress("Loading data...");
    try{
      result=await SERVER.postData(url, params);
    } catch (err) {
      result=null;
    }
    // APP.resetProgress();
    console.log(result);
    APP.resetProgress();
    return result;
  }
  return my; 
}(ML_LEADERBOARD || {}));

;
/**
 * @module MP_MODEL_COMPARISON
 * @description Shows and manages the model comparison page that shows the stats for the various models
 * for test and training data sources
 */
var MP_MODEL_COMPARISON = (function(my){
  /**
   * @member {string} STORE_KEY 
   * @description the key for caching data in the STORE
   * @public
   */
  my.STORE_KEY="MP_MODEL_COMPARISON";

  /**
   * @member {string} dataSource
   * @description Whether the current view is for the "test" or "training" data.
   * @public
   */
  my.dataSource="test";

  /**
   * @member {object} compData Comparison data from server API call
   * @private
   */
  var compData=null;

  /**
   * @method prime
   * @description Primes this view, adds the view's HTML from its JS Pug template into the DOM.
   * Registers listeners.
   * @private
   */
  var prime = function(){
    qs("#model-comparison").innerHTML=mpmodelcomparisonTemplate();
    registerListeners();
  }

  /**
   * @method registerListeners
   * @description registers change listeners for the data sources (test or training)
   * @private
   */
  var registerListeners = function(){
    qs("#model-comparison").qs("#mc-sourceSelect").addEventListener("change", evt=>{
      my.dataSource=evt.target.value;
      qs('#model-comparison .tableContainer table').setAttribute("data-active-source", my.dataSource);
    });
  }

  /**
   * @method load
   * @description Loads the view. Sets identifying markers to scope CSS. Loads data for the 
   * view either from the STORE or by making a server call.
   * @param {string} pkey The project ID in the context of which the view is loaded
   * @async
   * @public
   */
  var load=async function(pkey){
    APP.resetCurrentPageMarker();
    qs("#main-content").setAttribute("class", "");
    qs("#main-content").addClass("mp-model-comparison");
    compData=STORE.getProjectData(pkey, MP_MODEL_COMPARISON.STORE_KEY);
    if (!compData){
      compData=await my.loadData({projectKey: pkey});
      STORE.setProjectData(pkey, MP_MODEL_COMPARISON.STORE_KEY, compData);
      STORE.setProjectMetadata(pkey, MP_MODEL_COMPARISON.STORE_KEY+"_compData_loaded", true);
      prime();
    }
  }

  /**
   * @method show
   * @description load the view's data and then load it into the table
   * @async
   * @public
   */
  my.show=async function(pkey){
    console.log("showing...");
    await load(pkey);

    loadModelsTable();
  }

  /**
   * @method loadModelsTable
   * @description load the data into the table
   * @private
   */
  var loadModelsTable = function(){
    let html='';
    Object.keys(compData).forEach(x=>{
      ['test', 'train'].forEach(source=>{
        html+=addTableRow({
          type: compData[x].platform.toLowerCase(),
          id: x.toLowerCase(),
          name: compData[x].name,
          source: source,
          auc: compData[x][source].auc,
          acc: compData[x][source].acc,
          ks: compData[x][source].ks,
          gini: compData[x][source].gini,
          br_s: compData[x][source].br_s,
          recommended: compData[x].isPreferred
        });
      });
    });
    qsa("#model-comparison .tableContainer table tbody tr:not(.template-row)").forEach(x=>x.remove());
    qs("#model-comparison .tableContainer table tbody").innerHTML=qs("#model-comparison .tableContainer table tbody").innerHTML+html;
    qs("#model-comparison .tableContainer tbody tr:nth-child(2) td").addClass("selected");
  }

  /**
   * @method addTableRow
   * @description Clone the template row and load it with data.
   * @param {object} rowData a JS object representing the columns of the table, obtained from the comp API
   * @property {string} type Type of the AI/ML platform
   * @property {string} id LRM, DRF, GBM etc.
   * @property {string} name long full name
   * @property {string} source validation or training
   * @property {number} auc AUC
   * @property {number} acc Accuracy
   * @property {number} ks KS
   * @property {number} gini Gini
   * @property {number} br_s Brier Score
   * @property {number} recommended marker for whether this is the preferred model
   * @property {string} dPath URL to download the model
   * @private
   */
  var addTableRow = function(rowData){
    let templateRow = qs("#model-comparison #mc-table tr.template-row");
    if (templateRow){
      let tr=templateRow.cloneNode(true);
      tr.removeClass("template-row");
      tr.addClass(rowData.source);
      if (rowData.recommended){
        tr.addClass("trophy");
      }
      tr.setAttribute("data-source", rowData.source);
      tr.qsa("td").forEach(x=>{
        if (x.hasClass("name")){
          x.setAttribute("data-type", rowData.type);
          x.setAttribute("data-source", rowData.source);
          x.addClass(`type-${rowData.type}`);
        } 
        if (x.hasClass("link")){
          if (typeof rowData.link !== "undefined" && rowData.link){
            x.qs("a").href=rowData.link
          }
        } else {
          value=rowData[x.getAttribute("data-key")];
          if (typeof value === "number" && !Number.isInteger(value)){
            x.innerText=value.toFixed(3);  
          } else {
            x.innerText=value;
          }
        }
      });
      return tr.outerHTML;
    }
    return "";
  }

  /**
   * @method selectRow
   * @description listener for selection of table row. 
   * @param {string} modelID identifier for the data row that was selected
   * @public
   */
  my.selectRow = function(modelID){
    qsa('#model-comparison .tableContainer td.selected').forEach(x=>x.removeClass("selected"));
    qs(`#model-comparison .tableContainer td#${modelID}`).addClass("selected");
  }

  /**
   * @method loadData
   * @description Loads the data from the comp API on the server and returns it
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project for which to get scores
   * @return {object} Raw graph data obtained from the comp API.
   * @private
   * @async
   */
  my.loadData=async function(iparams){
    let url=SERVER.getBaseAddress() + 'comp';
    let userHash=CREDENTIALS.getUserCreds();
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);
    APP.setProgress("Loading model data...", true);
    let result=null;
    try{
      if (useTestData){
        result=await MC_TEST_DATA.getData();
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
      APP.resetProgress();
    }
    APP.resetProgress();
    compData=result;
    console.log(result);
    return result;
  }
  return my; 
}(MP_MODEL_COMPARISON || {}));

;
/**
 * @module AUTO_CODE 
 * @description Loads and handles the page for the Auto code generator. This page depends on
 * data returned by the comp API and thus doesn't have its own STORE key. It will in fact try 
 * to retrieve cached information from the MD_MODEL_COMPARISON page by using its STORE key.
 */
var AUTO_CODE = (function(my){
  /**
   * @member {string} dataSource "test" or "train"; defaults to "test"
   * @public
   */
  my.dataSource="test";

  /**
   * @member {object} compData Comparison data from server API call
   * @private
   */
  var compData=null;

  /**
   * @member {object} searchList When a list.js instance is used to add sorting and search capability its 
   * instance variable is stored here.
   * @private
   */
  var searchList=null;

  /**
   * @method prime
   * @description Primes this view, adds the view's HTML from its JS Pug template into the DOM.
   * Registers listeners.
   * @private
   */
  var prime = function(){
    qs("#auto-code-generator").innerHTML=mdautocodegeneratorTemplate();
    registerListeners();
  }

  /**
   * @method registerListeners
   * @description registers change listeners for the tab on the container element, using event delegation.
   * @private
   */
  var registerListeners = function(){
    qs("#auto-code-generator").addEventListener("change", evt=>{
      if (evt.target.id=="md-sourceSelect"){
        my.dataSource=evt.target.value;
        qs('#auto-code-generator .tableContainer table').setAttribute("data-active-source", my.dataSource);
      } else if (evt.target.hasClass("tab-input")){
        let tabTriggers=qsa(".tab-trigger[name='api-tab-group']:not(.template)").forEach(x=>x.removeClass("selected"));
        qs(`#${evt.target.getAttribute("label-id")}`).addClass("selected");
      }
    });
    qs("#auto-code-generator #md-table").addEventListener("click", my.selectRow);
  }

  /**
   * @method load
   * @description Loads the view. Sets identifying markers to scope CSS. Loads data for the 
   * view either from the STORE or by making a server call.
   * @param {string} pkey The project ID in the context of which the view is loaded
   * @async
   * @public
   */
  var load=async function(pkey){
    APP.resetCurrentPageMarker();
    qs("#main-content").setAttribute("class", "");
    qs("#main-content").addClass("md-auto-code");
    compData=STORE.getProjectData(pkey, MP_MODEL_COMPARISON.STORE_KEY);
    if (!compData){
      compData=await MP_MODEL_COMPARISON.loadData({projectKey: pkey});
      STORE.setProjectData(pkey, MP_MODEL_COMPARISON.STORE_KEY, compData);
      STORE.setProjectMetadata(pkey, MP_MODEL_COMPARISON.STORE_KEY+"_compData_loaded", true);
    }
    prime();
  }

  /**
   * @method show
   * @description load the view's data into the table
   * @async
   * @public
   */
  my.show=async function(pkey){
    await load(pkey);

    loadModelsTable();
  }

  /**
   * @method loadModelsTable
   * @description load the data into the table and initialize list.js on it
   * @private
   */
  var loadModelsTable = function(){
    let html='';
    Object.keys(compData).forEach(x=>{
      ['test'].forEach(source=>{
        html+=addTableRow({
          type: compData[x].platform.toLowerCase(),
          id: x.toLowerCase(),
          name: compData[x].name,
          source: source,
          auc: compData[x][source].auc,
          acc: compData[x][source].acc,
          ks: compData[x][source].ks,
          // gini: compData[x][source].gini,
          // br_s: compData[x][source].br_s,
          recommended: (compData[x].isPreferred),
          dPath: compData[x].dPath
        });
      });
    });
    qs("#auto-code-generator .tableContainer table tbody").innerHTML=html;
    my.selectRow(qs("#auto-code-generator .tableContainer tbody tr:first-child td:first-child"));
    searchList=new List(qs('#md-outer-container .model-list'), { 
      valueNames: ['name']
    });

  }

  /**
   * @method addTableRow
   * @description Clone the template row and load it with data.
   * @param {object} rowData a JS object representing the columns of the table, obtained from the comp API
   * @property {string} type Type of the AI/ML platform
   * @property {string} id LRM, DRF, GBM etc.
   * @property {string} name long full name
   * @property {string} source validation or training
   * @property {number} auc
   * @property {number} acc
   * @property {number} ks
   * @property {number} recommended marker for whether this is the preferred model
   * @property {string} dPath URL to download the model
   * @private
   */
  var addTableRow = function(rowData){
    let templateRow = qs("#auto-code-generator #md-table tr.template-row");
    if (templateRow){
      let tr=templateRow.cloneNode(true);
      tr.removeClass("template-row");
      tr.addClass(rowData.source);
      tr.setAttribute("model-ID", rowData.id);
      if (rowData.recommended){
        tr.addClass("trophy");
      }
      tr.setAttribute("data-source", rowData.source);
      tr.qsa("td").forEach(x=>{
        if (x.hasClass("name")){
          x.setAttribute("data-type", rowData.type);
          x.setAttribute("data-source", rowData.source);
          x.addClass(`type-${rowData.type}`);
        } 
        if (x.hasClass("dPath")){
          if (typeof rowData.dPath !== "undefined" && rowData.dPath){
            x.qs("a").setAttribute("href", rowData.dPath);
          }
        } else {
          value=rowData[x.getAttribute("data-key")];
          if (typeof value === "number" && !Number.isInteger(value)){
            x.innerText=value.toFixed(3);  
          } else {
            x.innerText=value;
          }
        }
      });
      return tr.outerHTML;
    }
    return "";
  }

  /**
   * @method selectRow
   * @description listener for selection of table row. update the RHS with the code for that model. 
   * If the API has not returned any code, use the template code instead.
   * @param {Event} evt Click event for the table row.
   * @public
   */
  my.selectRow = function(evt){
    let tr=null;
    if (evt instanceof HTMLElement){
      tr=evt.closest("tr");
    } else {
      tr=evt.target.closest("tr");
    }
    if (!tr){return;}
    qsa("#auto-code-generator #md-table tbody tr.selected").forEach(x=>x.removeClass("selected"));
    tr.addClass("selected");

    modelID = tr.getAttribute("model-id");

    qsa("#auto-code-generator #api .tabsTriggersContainer label:not(.template)").forEach(x=>x.remove());
    qs("#auto-code-generator #api .tabs-content-container").qsa(".tab-input:not(.template), .tab-content:not(.template)").forEach(x=>x.remove());
    if (!compData[modelID.toUpperCase()].api) {
      compData[modelID.toUpperCase()].api={
        "Java": `
import au.com.bytecode.opencsv.CSVReader;
import hex.ModelCategory;
import hex.genmodel.GenModel;
import hex.genmodel.MojoModel;
import hex.genmodel.algos.tree.SharedTreeMojoModel;
import hex.genmodel.algos.glrm.GlrmMojoModel;
import hex.genmodel.easy.EasyPredictModelWrapper;
import hex.genmodel.easy.RowData;
import hex.genmodel.easy.prediction.*;

private void loadModel(String modelName) throws Exception {
  try {
    loadMojo(modelName);
  } catch (IOException e) {
    loadPojo(modelName);  
  }
}

private void loadMojo(String modelName) throws IOException {
  GenModel genModel = MojoModel.load(modelName);
  EasyPredictModelWrapper.Config config = new EasyPredictModelWrapper.Config().setModel(genModel).setConvertUnknownCategoricalLevelsToNa(true).setConvertInvalidNumbersToNa(setInvNumNA);

  if (getTreePath)
    config.setEnableLeafAssignment(true);

  if (returnGLRMReconstruct)
    config.setEnableGLRMReconstrut(true);

  model = new EasyPredictModelWrapper(config);

  BinomialModelPrediction p = model.predictBinomial(row);
  if (getTreePath) {
      writeTreePaths(p.leafNodeAssignments, output);
    } else {
      output.write(p.label);
      output.write(",");
      for (int i = 0; i < p.classProbabilities.length; i++) {
        if (i > 0) {
          output.write(",");
        }
        output.write(myDoubleToString(p.classProbabilities[i]));
      }
    }
  }
}
  
public static void main() {
  loadModel(modelName)
}
        `,
        "PMML": `
<!-- Not Supported -->
        `,
        "SQL": `
-- Not Supported
        `,
      }
    }
    Object.keys(compData[modelID.toUpperCase()].api).forEach((lang, i)=>{
      let label=qs("#auto-code-generator #api .tabsTriggersContainer label.template").cloneNode();
      let input=qs("#auto-code-generator #api .tabs-content-container .tab-input.template").cloneNode();
      let content=qs("#auto-code-generator #api .tabs-content-container .tab-content.template").cloneNode();
      let code=compData[modelID.toUpperCase()].api[lang];
      label.removeClass("template,selected");
      label.innerText=lang;
      label.setAttribute("id", `tab-label-${lang}`);
      label.setAttribute("for", `tab-radio-${lang}`);
      // label.setAttribute("name", `api-tab-group-${lang}`);
      input.removeClass("template");
      input.innerText=code;
      input.setAttribute("id", `tab-radio-${lang}`);
      // input.setAttribute("name", `api-tab-group-${lang}`);
      input.setAttribute("label-id", `tab-label-${lang}`);
      content.removeClass("template");
      
      let languageMappings={//for syntax highlighting
        java: "java",
        pmml: "xml",
        sql: "sql"
      };
      content.innerHTML=`<pre><code class="${languageMappings[lang.toLowerCase()]}"></code></pre>`;
      content.qs("code").innerText=code;
      content.setAttribute("id", `tab-content-${lang}`);
      // hljs.highlightBlock(content);
      // content.setAttribute("name", `api-tab-group-${lang}`);
      qs("#auto-code-generator #api .tabsTriggersContainer").append(label);
      qs("#auto-code-generator #api .tabs-content-container").append(input);
      qs("#auto-code-generator #api .tabs-content-container").append(content);
      hljs.highlightBlock(content.qs("code"));
      console.log(i);
      if (i==0){
        label.addClass("selected");
        input.checked=true;
      }
    });
  };

  return my; 
}(AUTO_CODE || {}));

;
/**
 * @module SCORE_MODELS
 * @description #/md/score-models/ page controller. This page allows the user to create and select a data source and
 * score a model on that data. The scored model is then available for download. Multiple models can be scored
 * simultaneously and their progress is shown while they are being scored.
 */
var SCORE_MODELS = (function(my){
  /**
   * @member {string} STORE_KEY the key used to cache this screen's data in the STORE
   * @public
   */
  my.STORE_KEY="MD_SCORE_MODELS";

  /**
   * @member {string} dataSource "test" or "train"; defaults to "test"
   * @public
   */
  my.dataSource="test";

  /**
   * @member {object[]} modelsList List of available models, extracted from the model comparison data. This is
   * null until assigned in [load](#~load).
   * @private
   */
  var modelsList=null;

  /**
   * @member {string} currentPKey The ID of the project that is the context of this page. It is easier to 
   * store it rather than pass it around in every function call.
   */
  var currentPKey=null;

  /**
   * @method prime
   * @description Primes this view, adds the view's HTML from its JS Pug template into the DOM.
   * Registers listeners.
   * @private
   */
  var prime = function(){
    qs("#score-models").innerHTML=mdscoremodelsTemplate();
    registerListeners();
    
  };

  /**
   * @method registerListeners
   * @description Register listeners for: 
   * * compact labels
   * * row click
   * * source selection
   * * model selection
   * * start scoring
   * @private
   */
  var registerListeners = function(){
    COMPACT_LABEL.registerCompactLabel(qsa("#score-models .searchBar label.compact"));
    qs("#score-models #add-db-data-source").addEventListener("click", function(){
      qs("#source-button .dropdown-trigger-input").checked=false;
      DB_CONNECTION.dbConnection({
        projectKey: currentPKey,
        destinationOnSuccess: "back",
        destinationOnError: "back",
        destinationOnCancel: "back",
        sourceType: "production",
      }).then(function(conninfo){
        console.log(conninfo);
        updateSourcesSelect(currentPKey);
      }, function(msg){
        console.log(msg);
      });
    });

    qs("#score-models #add-file-data-source").addEventListener("click", function(){
      qs("#source-button .dropdown-trigger-input").checked=false;
      FILE_UPLOAD.fileUpload({
        projectKey: currentPKey,
        destinationOnSuccess: "back",
        destinationOnError: "back",
        destinationOnCancel: "back",
        sourceType: "production",
      }).then(function(conninfo){
        console.log(conninfo);
        updateSourcesSelect(currentPKey);
      }, function(msg){
        console.log(msg);
      });
    });

    qs("#score-models #start-scoring").addEventListener("click", function(evt){
      let source=qs("#score-models .searchBar #select-md-sm-data-source").value;
      let model=qs("#score-models .searchBar #select-md-sm-model-name").value;
      startScoring({
        "projectKey": currentPKey,
        "model": model,
        "source": source
      }).then(scoringID => {
        getScoresTableRows({
          projectKey: currentPKey,
          scoring_ids: [scoringID.data.posts[0].id],
        }).then(tableRows=>{
          progressTDValueObserver.disconnect();
          let tbody = document.createElement("tbody"); tbody.innerHTML=tableRows;
          while(tbody.childNodes.length>0){
            let trs=qsa("#score-models .tableContainer table tbody tr");
            tr=tbody.childNodes[0];
            if (tr.getAttribute("status").toLowerCase()=="running"){
              addScoreForPolling(tr.getAttribute("score-id"));
            }
            if (trs.length == 1){
              qs("#score-models .tableContainer table tbody").appendChild(tr);
            } else {
              qs("#score-models .tableContainer table tbody").insertBefore(tr, trs[1]);
            }
          }
          qsa("#score-models #md-sm-table .bind").forEach(x=>progressTDValueObserver.observe(x, {attributes: true}));
          if (scoresPending()){
            pollScoringProgress(null, 2);
          }
        });
      });
    });
  };

  /**
   * @method load
   * @description load the page's template and add the scope markers for the CSS. load the data for this page, 
   * either from the comp/ API or from the STORE.
   * @param {string} pkey project key which is the context for this view.
   * @async
   * @private
   */
  var load=async function(pkey){
    currentPKey=pkey;
    APP.resetCurrentPageMarker();
    qs("#main-content").setAttribute("class", "");
    qs("#main-content").addClass("md-score-models");
    modelsList=await getModelsList(currentPKey);
    prime();
  };

  /**
   * @method show
   * @description Load and show the model scoring page:
   * * Load the data
   * * Load the model names for the select box
   * * Load the source names for the select box
   * * Load the data into the table and add all the table rows
   * * Start polling for scores if scoring is in progress and render that
   * @param {string} pkey The project ID of the project in context
   * @async
   * @public
   */
  my.show=async function(pkey){
    console.log("showing...");
    await load(pkey);

    loadModelsSelect(pkey);
    await updateSourcesSelect(pkey);
    await loadScoresTable(pkey);
    if (scoresPending()){
      pollScoringProgress(null, 2);
    }

  };

  /**
   * @method loadModelsSelect
   * @description Use data from the list of models obtained in [load](#~load) to populate the dropdown
   * that allows the user to select a model to score. 
   * **NOTE**: this method does not check whether the [modelsList](#~modelsList) is populated. Care should
   * be taken to call this method only after [load](#~load) has been called.
   * @param {string} pkey The project ID of the project in context
   * @private
   */
  var loadModelsSelect=function(pkey){
    let html='';
    Object.keys(modelsList).forEach(x=>{
      ['test'].forEach(source=>{
        html+=`<option value="${x.toUpperCase()}" id="md-sm-model-name-option-${x.toUpperCase()}">${modelsList[x].name}</option>`;
      });
    });
    qs("#score-models #select-md-sm-model-name").innerHTML+=html;
  };

  /**
   * @method updateSourcesSelect
   * @description Use data from the connection/list/sources API to populate the select box
   * that lists the available data sources.
   * @param {string} pkey The project ID of the project in context
   * @private
   * @async
   */
  var updateSourcesSelect=async function(pkey){
    let html='';
    let sourcesList=await loadAvailableSources({projectKey: pkey});
    
    try{
      if (sourcesList.data.posts[1].OutOfTime.length > 0 ){
        sourcesList=sourcesList.data.posts[1]["OutOfTime"];
        if (!sourcesList){
          sourcesList = [];
        }
      }else{
        sourcesList=[];
      }
    } catch(err){
      sourcesList=[];
    }
    sourcesList.forEach(x=>{
      let name=x.name;
      if (x.name.includes('-')){
        name=x.name.substr(0,x.name.lastIndexOf("-"))
      }
      html+=`<option class="md-sm-data-source" value="${name}" id="md-sm-source-option-${x.name}">${name} [${x.type}]</option>`;
    });
    qsa("#score-models #select-md-sm-data-source .md-sm-data-source").forEach(x=>x.remove());
    qs("#score-models #select-md-sm-data-source").innerHTML+=html;
    qs("#score-models #select-md-sm-data-source").setAttribute("data-source-count", sourcesList.length);
  };

  /**
   * @method getScoresTableRows
   * @description Load the scores
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project for which to get scores
   * @async
   * @private
   */
  var getScoresTableRows = async function(iparams){
    let html='';
    let modelScores=await loadScores(iparams);
    let posts=modelScores.data.posts;
    if (posts && posts.length > 0){
      modelScores=posts;
    } else {
      modelScores=[];
    }
    for(let i=0; i<modelScores.length; i++){
      let score=modelScores[i][0];
      let model = await getModelDetails(iparams.projectKey, score.model);
      if (score.status=="running"){
        addScoreForPolling(score.id);
      }
      html+=addTableRow({
        type: model.platform.toLowerCase(),
        id: score.id,
        name: model.name,
        source: score.source,
        auc: score.auc,
        acc: score.acc,
        gini: score.gini,
        recommended: (model.isPreferred),
        dPath: score.dpath,
        status: score.status,
      });
    }
    return html;
  }

  /**
   * @method loadScoresTable
   * @description Clear the scores table, get the rendered table rows for the scoring data and add it 
   * to the table, and then register the table to listen to attribute changes on the TDs for progress updates.
   * @param {string} pkey The project ID of the project in context
   * @async
   * @private
   */
  var loadScoresTable = async function(pkey){
    let html=await getScoresTableRows({projectKey: pkey});
    qsa("#score-models .tableContainer table tbody tr:not(.template-row)").forEach(x=>x.remove());
    qs("#score-models .tableContainer table tbody").innerHTML+=html;
    qsa("#score-models #md-sm-table .bind").forEach(x=>progressTDValueObserver.observe(x, {attributes: true}));
  };

  /** 
   * @member {class} MutationObserver
   * @description Aliasing the MutationObserver for cross browser compatibility. It will be used to create an
   * observer instance, [progressTDValueObserver](#~progressTDValueObserver) observe for attribute changes 
   * that we'll make to the TD for progress updates.
   * @private
   */
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  /**
   * @member {MutationObserver} progressTDValueObserver
   * @description Observe for attribute changes that we'll make to the TD for progress updates. Update the style
   * of the TD to add a custom property --progress-value on it that will cascade a progress width change.
   * @private
   */
  var progressTDValueObserver=new MutationObserver(mutations=>{
    console.log("wolverine comes!");
    mutations.forEach(mutation=>{
      if (mutation.type == "attributes" && mutation.attributeName.startsWith("data-")) {
        mutation.target.setAttribute("style", `--progress-value: ${mutation.target.getAttribute("data-value")}`);
      }
    });
  });
  
/**
 * @method addTableRow
 * @description Clone a template row and populate it with data.
 * @param {object} rowData One of the objects from the array from the comp API
 * @property {string} rowData.type Type of the AI/ML platform
 * @property {string} rowData.id LRM, DRF, GBM etc.
 * @property {string} rowData.name long full name
 * @property {string} rowData.source validation or training
 * @property {number} rowData.auc
 * @property {number} rowData.acc
 * @property {number} rowData.gini
 * @property {number} rowData.recommended marker for whether this is the preferred model
 * @property {string} rowData.dPath URL to download the model
 * @property {string} rowData.status "running" or "completed"
 * @private
 */
  var addTableRow = function(rowData){
    let templateRow = qs("#score-models #md-sm-table tr.template-row");
    if (templateRow){
      let tr=templateRow.cloneNode(true);
      tr.removeClass("template-row");
      tr.setAttribute("score-id", rowData.id);
      tr.setAttribute("data-source", rowData.source);
      tr.setAttribute("status", rowData.status.toLowerCase());
      if (rowData.recommended){
        tr.addClass("trophy");
      }
      tr.qsa("td").forEach(x=>{
        if (x.hasClass("name")){
          x.setAttribute("data-type", rowData.type);
          x.setAttribute("data-source", rowData.source);
          x.addClass(`type-${rowData.type}`);
        }
        if (x.hasClass("dPath")){
          if (typeof rowData.dPath !== "undefined" && rowData.dPath){
            x.qs("a").setAttribute("href", rowData.dPath);
          } 
        } else if (x.hasClass("progress")) {
          let progress=rowData.progress;
          if (!progress){
            progress=0;
          }
          x.setAttribute("data-value", progress);
          x.setAttribute("style", "--progress-value: 0");
          x.addClass("bind");
        } else {
          value=rowData[x.getAttribute("data-key")];
          let perc="";
          if (x.hasClass("auc") || x.hasClass("acc")){
            perc="%";
          }
          if (typeof value === "number" && !Number.isInteger(value)){
            x.innerText=value.toFixed(3)+perc;  
          } else if (Array.isArray(value)){
            while(Array.isArray(value)){value=value.length>0?value[0]:"";}
            x.innerText=value.toFixed(3)+perc;  
          } else {
            x.innerText=value;
          }
        }
      });
      return tr.outerHTML;
    }
    return "";
  };

  /**
   * @method getModelsList
   * @description Get the list of models from the [STORE](module-STORE.html) if available, else from the comp API 
   * and then store it in the [STORE](module-STORE.html)
   * @param {string} pkey project key which is the context for this view.
   * @return {Promise} A Promise that resolves to the [modelsList](#~modelsList) array.
   * @private
   * @async
   */
  var getModelsList = async function(pkey){
    if (modelsList){
      return Promise.resolve(modelsList);
    }
    modelsList=STORE.getProjectData(pkey, MP_MODEL_COMPARISON.STORE_KEY);
    if (!modelsList){
      modelsList=await MP_MODEL_COMPARISON.loadData({projectKey: pkey});
      STORE.setProjectData(pkey, MP_MODEL_COMPARISON.STORE_KEY, modelsList);
      STORE.setProjectMetadata(pkey, MP_MODEL_COMPARISON.STORE_KEY+"_compData_loaded", true);
    }
    return modelsList;
  };

  /**
   * @method getModelDetails
   * @description Look up a model from the [modelsList](#~modelsList).
   * @param {string} pkey project key which is the context for this view.
   * @param {string} modelID ID of the model, "LRM", "DRF", "GBM" etc.
   * @private
   * @async
   */
  var getModelDetails = async function(pkey, modelID){
    modelsList = await getModelsList(pkey);
    let model = null;
    for (let x in modelsList){
      if (x.toLowerCase() == modelID.toLowerCase()){
        model=modelsList[x];
        break;
      }
    }
    return model;
  };

  /**
   * @method loadAvailableSources
   * @description Get the sources currently available from the [SERVER](module-SERVER.html)'s connection/list/sources API
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project for which to get scores
   * @private
   * @async
   */
  var loadAvailableSources = async function(iparams){
    let url=SERVER.getBaseAddress() + 'connection/list/sources';
    let userHash=CREDENTIALS.getUserCreds();
    APP.setProgress("Loading Sources...", true);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);
    let result=null;
    try{
      if (useTestData){
        result=await MD_SCORE_MODELS_TEST_DATA.getSources(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
      APP.resetProgress();
    }
    APP.resetProgress();
    console.log(result);
    return result;
  };

  /**
   * @method loadScores
   * @description Gets the list of scores from the [SERVER](module-SERVER.html)'s score/list API
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project for which to get scores
   * @private
   * @async
   */
  var loadScores = async function(iparams){
    let url=SERVER.getBaseAddress() + 'score/list';
    let userHash=CREDENTIALS.getUserCreds();
    APP.setProgress("Loading scores...", true);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);
    
    let result=null;
    try{
      if (useTestData){
        result=await MD_SCORE_MODELS_TEST_DATA.getResults(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
    }
    APP.resetProgress();
    console.log(result);
    return result;
  };

  /**
   * @method getScoreProgress
   * @description Get the progress of the scoring process for the specified IDs
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project in context
   * @property {string[]} iparams.scoring_ids Array of IDs returned by the score/start API or score/list API 
   * @return {object} The raw result sent by the server for the score/progress API
   * @private
   * @async
   */
  var getScoreProgress = async function(iparams){
    let url=SERVER.getBaseAddress() + 'score/progress';
    let userHash=CREDENTIALS.getUserCreds();
    APP.setProgress("Getting scores...", false);
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
      scoring_ids: scoreListForPolling,
    }, iparams);

    let result=null;
    try{
      if (useTestData){
        result=await MD_SCORE_MODELS_TEST_DATA.getProgress(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      result=null;
      APP.resetProgress();
    }
    APP.resetProgress();
    console.log(result);
    return result;
  };

  /**
   * @method updateProgress
   * @description This method is called with the result of the [getScoreProgress](#~getScoreProgress) method as a input
   * parameter in order to update the progress value in the UI else update the row with the actual scoring results
   * @param {object} result The value returned by the [getScoreProgress](#~getScoreProgress) method, i.e. the result of
   * the score/progress API
   */
  var updateProgress = function(result){
    let scores=result.data.posts;
    scores.forEach(score=>{
      qs(`#score-models #md-sm-table tr[score-id="${score.id}"] td.progress`).setAttribute("data-value", score.progress);
      if (score.progress==100){
        stopPollingScore(score.id);
        loadScores({projectKey: currentPKey, scoring_ids: [score.id]})
          .then(function(result){
            let scoresToUpdate=result.data.posts;
            for (let i=0; i<scoresToUpdate.length; i++){
              let scoreToUpdate=scoresToUpdate[i];
              if (scoreToUpdate.id==score.id){
                let tr=qs(`#score-models #md-sm-table tr[score-id="${score.id}"]`);
                tr.setAttribute("status", "completed");
                ["auc", "acc", "gini"].forEach(attr=>{
                  let value=scoreToUpdate[attr];
                  let perc="";
                  if (attr=="auc" || attr == "acc"){perc = "%";}
                  tr.qs(`td.${attr}`).innerText=value.toFixed(3)+perc;
                });
                tr.qs('td.dPath a').setAttribute("href", scoreToUpdate.dpath);
              }
            }
          });
      }
    });
  };

  /**
   * @method startScoring
   * @description Start the scoring for a specified project+source+model.
   * @param {object} iparams userHash(optional) and projectKey(required)
   * @property {string} iparams.projectKey id of the project in context
   * @return {object} The raw result sent by the server for the score/start API
   * @private
   * @async
   */
  var startScoring = async function(iparams){
    let url=SERVER.getBaseAddress() + 'score/start';
    let userHash=CREDENTIALS.getUserCreds();
    if (userHash == null){
      throw new Error(i18n.en.APP.UI.ERROR.MODELCFG.USER_NOT_LOGGED_IN);
    }
    let params=extend({
      key: userHash, 
      projectKey: "",
    }, iparams);
    APP.setProgress("Scoring...", true);
    let result=null;
    try{
      if (useTestData){
        result=await MD_SCORE_MODELS_TEST_DATA.startScoring(url, params);
      } else {
        result=await SERVER.postData(url, params);
      }
    } catch (err) {
      APP.resetProgress();
      result=null;
    }
    APP.resetProgress();
    console.log(result);
    return result;
  }

  /**
   * @member {boolean} continuePolling
   * @description Polling stops if this is false at the time of evaluating the exit condition. This is set to `false`
   * by the [cancelPolling](#~cancelPolling) function.
   * @private
   */
  var continuePolling=true;

  /**
   * @member {string[]} scoreListForPolling
   * @description This is the list of IDs that will be sent to the score/progress API for getting updated progress.
   * IDs are added to the list if another model is concurrently scored, and removed from here if scoring is completed
   * for a particular model. 
   * @see [addScoreForPolling](#~addScoreForPolling), [stopPollingScore](#~stopPollingScore)
   * @private
   */
  var scoreListForPolling=[];

  /**
   * @method addScoreForPolling
   * @description Adds a scoreID to the [scoreListForPolling](#~scoreListForPolling) list. This list is then used to 
   * receive progress updates of the scoring process.
   * @param {string} scoreID ID of the score to be polled
   * @private
   */
  var addScoreForPolling=function(scoreID){
    scoreListForPolling.push(""+scoreID);
  };

  /**
   * @method stopPollingScore
   * @description Remove specified score ID from the [scoreListForPolling](#~scoreListForPolling) list. If the list
   * is empty call [cancelPolling](#~cancelPolling) funciton.
   * @param {string} scoreID ID of the score to be removed from progress update polling
   * @private
   */
  var stopPollingScore=function(scoreID){
    let index=scoreListForPolling.indexOf(""+scoreID);
    if (index>=0){
      scoreListForPolling.splice( index, 1 );
    }
    if (scoreListForPolling.length==0){
      my.cancelPolling();
    }
  };

  /**
   * @method clearPollingScoreList
   * @description Empty the [scoreListForPolling](#~scoreListForPolling) list. This is not called from anywhere,
   * but it should also call [cancelPolling](#~cancelPolling) after emptying, for efficiency. It will happen anyway
   * upon the next polling cycle.
   */
  var clearPollingScoreList=function(){
    scoreListForPolling=[];
  };

  /**
   * @method scoresPending
   * @description convenience method for checking whether the [scoreListForPolling](#~scoreListForPolling) list is 
   * emtpy.
   * @return {boolean} true if the list has any score IDs still polling.
   * @private
   */
  var scoresPending=function(){
    return scoreListForPolling.length>0;
  };

  /**
   * @method cancelPolling
   * @description Sets the [continuePolling](#~continuePolling) flag false. Also clears any pending
   * polling timer.
   * @public
   */
  my.cancelPolling=function(){
    continuePolling=false;
    if (pollTimeoutToken){
      clearTimeout(pollTimeoutToken);
    }
  };

  /**
   * @member {Number} pollTimeoutToken 
   * @description This is the reference that can be used to find the current timeOut that's waiting.
   * @private
   */
  var pollTimeoutToken=null;

  /**
   * @method pollScoringProgress 
   * @description Start polling the score/progress API until interrupted by user action or by completion of scoring
   * #### HOW THE POLLING CODE WORKS
   * There's a continuePolling flag that is checked each time the timer is restarted. 
   * When the polling is first started, it returns a Promise that is resoved when the
   * self referential timer hits an exit condition. An exit condition is hit either when
   * the user navigates away from the page, or when the [scoreListForPolling](#~scoreListForPolling) list
   * is empty. In that case the promise is resolved. 
   * @return {Promise} Returns a promise that is resolved to a completion status. It is 
   * rejected in case of any error or elapse of timeout.
   * @param {Number} timeout If the timer loop is never interrupted it should be stopped in 
   * this much time in milliseconds
   * @param {Number} interval Loop every interval seconds.
   * @public
   */
  var pollScoringProgress=function(timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 6*60*60*1000);
    interval = interval*1000 || 10*1000;
    continuePolling=true;

    var checkCondition = async function(resolve, reject) {
      pollTimeoutToken=null;
      // If the condition is met, we're done! 
      try{
        APP.setProgress("Polling  Report...", false);
        var result = await getScoreProgress({projectKey: currentPKey});
        APP.resetProgress();
      } catch(err){
        console.error("Exception in polling.\n",err);
        APP.showError("Error in retrieving updates from server. Please contact adminitrator.");
        return reject(err);
      }
      if (!result || typeof result == "undefined"){
        console.error("Null result in polling.")
        return reject(new Error("Error in retrieving updates from server. Please contact adminitrator."));
      }
      // If the condition isn't met but the timeout hasn't elapsed, go again
      else if (Number(new Date()) < endTime) {
        updateProgress(result);
        if (!scoresPending()){
          return resolve("done");
        }
        if (continuePolling){
          pollTimeoutToken=setTimeout(checkCondition, interval, resolve, reject);
        } else {
          continuePolling=true;
          return reject({State: "interrupted"});
        }
      }
      // Didn't match and too much time, reject!
      else {
        return reject(new Error('timed out for ' + fn + ': ' + arguments));
      }
    };

    return new Promise(checkCondition);
  };
  

  return my; 
}(SCORE_MODELS || {}));;
function entryPoint(e){
  onloadAlreadyRun=true;

  APP.init();
}

document.addEventListener('DOMContentLoaded', function(e){
  onloadEventFired=true;
  if (!onloadAlreadyRun){
    entryPoint(e);
  }
});

if (!onloadAlreadyRun && !onloadEventFired){
  entryPoint();
}

if (typeof HTMLDialogElement === 'function') {
  qs("html").classList.add("html5dialog");
} else {
  qs("html").classList.add("no-html5dialog");
}

try{
  if (CSS.supports("display", "contents")){
    qs("html").classList.add("display-contents");
  } else {
    qs("html").classList.add("no-display-contents");
  }
} catch (err){
  qs("html").classList.add("no-display-contents");
}
//# sourceMappingURL=script.js.map
