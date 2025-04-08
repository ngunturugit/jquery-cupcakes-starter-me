//let cupcakesCollection = null;

//$.get(
  //"https://761186305-aD26-4839-b806-3803560049.mock.pstmn.io/cupcakes.json",
  //function(data) {
    //displayCupcakes(data);
    //cupcakesCollection = data;
  //},
  //"json"
//).fail(function() {
  //$("#cupcakes").empty();
  //$("#cupcakes").append("<div>There was a problem with the server. Please try again.</div>");
//});

$.ajax({
    url: "https://61186305-ab26-4839-b806-380-3560049.mock.pstmn.io/cupcakes.json",
    method: "GET",
    dataType: "json"
  })
  .done(function(data) {
    displayCupcakes(data);
  })
  .fail(function() {
    $("#cupcakes").empty();
    $("#cupcakes").append("<div>There was a problem with the server. Please try again.</div>");
  });  

function displayCupcakes(data) {
    $("#cupcakes").empty();
  
    let html = "";
  
    for (let cupcake of data) {
      html += `
        <section>
          <img src="${cupcake.image}" alt="${cupcake.alt}">
          <h4>${cupcake.name}</h4>
          <b>Ingredients:</b>
          <p class="ingredients">${cupcake.ingredients}</p>
          <b>${cupcake.frosting} Frosting</b>
          <p class="frosting">${cupcake.frostingIngredients}</p>
        </section>
      `;
    }
  
    $("#cupcakes").html(html);
  }
  