window.onload = function (){
    var data = [
        {skill:"PHP", value:50},
        {skill:"CSS", value:90},
        {skill:"HTML", value:70},
        {skill:"JS", value:60},
        {skill:"Design", value:40},
        {skill:"SQL", value:50}
    ];
    
    var color = d3.scale.category10();
    var newColor = d3.scale.category20();
    
    var svg = d3.select("#skillGraph");
    
    svg.selectAll('rect')
        .data(data,function(d){return d.skill;})
        .enter()
        .append('rect')
        .attr('width',50)
        .attr('height',0)
        .attr('x',function(d,i){return i*100})
        .attr('y',200)
        .attr('fill',function(d,i){return color(i)})
        .transition()
        .duration(1000)
        .attr('height',function(d){return d.value*5})
        .attr('y',function(d){return 500 - d.value*5});
    
    svg.selectAll('text')
        .data(data,function(d){return d.skill})
        .enter()
        .append('text')
        .text(function(d){return d.skill})
        .attr('font-size',16)
        .attr('x',function(d,i){return i*100})
        .attr('y',100)
        .transition()
        .duration(1500)
        .attr('y',400);
    
    document.getElementById("update").onclick = function(){
        var newData = [
            {skill:"JS", value:60},
            {skill:"PHP", value:70},
            {skill:"D3", value:50},
            {skill:"Testing", value:40},
            {skill:"Project", value:60},
            {skill:"CSS", value:90},
            {skill:"HTML", value:90}
        ];
        
        var updateCollection =  svg.selectAll('rect')
        .data(newData,function(d){return d.skill;})
        
        
        var updateTextCollection =  svg.selectAll('text')
        .data(newData,function(d){return d.skill;})
        
        updateCollection.enter()
            .append('rect')
            .attr('width',50)
            .attr('height',0)
            .attr('x',function(d,i){return i*100})
            .attr('y',200)
            .attr('fill',function(d,i){return color(d.skill)})
            .transition()
            .duration(1000)
            .attr('height',function(d){return d.value*5})
            .attr('y',function(d){return 500 - d.value*5});
        
        updateTextCollection.enter()
            .append('text')
            .text(function(d){return d.skill})
            .attr('font-size',16)
            .attr('x',function(d,i){return i*100})
            .attr('y',100)
            .transition()
            .duration(1500)
            .attr('y',400);
        
        /*================================================*/
        /*            Removes old data                    */
        /*================================================*/
            updateCollection.exit().remove();
            updateTextCollection.exit().remove();
        /*================================================*/
        
        updateCollection.transition()
            .attr('x',function(d,i){return i*100})
            .attr('y',200)
            .duration(1000)
            .attr('height',function(d){return d.value*5})
            .attr('y',function(d){return 500 - d.value*5});
        
        updateTextCollection.transition()
            .attr('x',function(d,i){return i*100})
            .attr('y',100)
            .duration(1500)
            .attr('y',400);
         
        
        
        console.log(data);
    };
    
    
//        .attr('width',50)
//        .attr('height',function(d){return d.value*5})
//        .attr('x',function(d,i){return i*100})
//        .attr('y',function(d){return 500 - d.value*5})
//        .attr('fill',function(d,i){return color(i)});
}