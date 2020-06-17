function generateDayWiseTimeSeries(s, count) {
    var array = FilterByDay(spendingItems);
    console.log(array);

    var values = [array[1], array[1]];
    var i = 0;
    var series = [];
    var x = new Date(array.date).getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }