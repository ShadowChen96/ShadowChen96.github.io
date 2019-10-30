$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appchomlKhH2n3ymU/North%20American%20travel%20cities?api_key=keyc1CgitILfZVCTA";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.cityname);
                       items.push(value.fields.myfirstvisitdate);
                       items.push(value.fields.countrybelonged);
                       items.push(value.fields.dominantlanguage);
                       items.push(value.fields.landingairportname);
                       items.push(value.fields.myrecommendation);
                       items.push(value.fields.howmanywonderfulcitytours);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "cityname",
                       defaultContent:""},
                     { title: "myfirstvisitdate",
                         defaultContent:"" },
                     { title: "countrybelonged",
                       defaultContent:"" },
                     { title: "dominantlanguage",
                       defaultContent:""},
                     { title: "landingairportname",
                       defaultContent:""},
                     { title: "myrecommendation",
                       defaultContent:""},
                     { title: "howmanywonderfulcitytours",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
