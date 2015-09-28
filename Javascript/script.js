window.onload = function (){
    var data = [
        {skill:"PHP", value:50, fill:blue},
        {skill:"CSS", value:90},
        {skill:"HTML", value:70},
        {skill:"JS", value:60},
        {skill:"Design", value:40},
        {skill:"SQL", value:50}
    ];
    
    var svg = d3.select("#skillGraph");
    
    svg.selectAll('rect')
        .data(data,function(d){return d.skill;})
        .enter()
        .append('rect')
        .attr('width',50)
        .attr('height',function(d){return d.value*5})
        .attr('x',function(d,i){return i*100});
    
    
    console.log(data);
    
}