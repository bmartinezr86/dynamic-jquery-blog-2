$(document).ready(function () {
  // Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
      pager: false,
    });
  }

  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: "Publicado el " + moment().format("LL"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium illo recusandae officiis, repellat hic consectetur porro molestiae, id ullam qui velit non magni dignissimos fugiat, corporis aspernatur at voluptatum!",
      },
      {
        title: "Prueba de titulo 2",
        date: "Publicado el " + moment().format("LL"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium illo recusandae officiis, repellat hic consectetur porro molestiae, id ullam qui velit non magni dignissimos fugiat, corporis aspernatur at voluptatum!",
      },
      {
        title: "Prueba de titulo 3",
        date: "Publicado el " + moment().format("LL"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium illo recusandae officiis, repellat hic consectetur porro molestiae, id ullam qui velit non magni dignissimos fugiat, corporis aspernatur at voluptatum!",
      },
      {
        title: "Prueba de titulo 4",
        date: "Publicado el " + moment().format("LL"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium illo recusandae officiis, repellat hic consectetur porro molestiae, id ullam qui velit non magni dignissimos fugiat, corporis aspernatur at voluptatum!",
      },
      {
        title: "Prueba de titulo 5",
        date: "Publicado el " + moment().format("LL"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium illo recusandae officiis, repellat hic consectetur porro molestiae, id ullam qui velit non magni dignissimos fugiat, corporis aspernatur at voluptatum!",
      },
      {
        title: "Prueba de titulo 6",
        date: "Publicado el " + moment().format("LL"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium illo recusandae officiis, repellat hic consectetur porro molestiae, id ullam qui velit non magni dignissimos fugiat, corporis aspernatur at voluptatum!",
      },
    ];

    posts.forEach((item, index) => {
      var post = `<article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>
       ${item.content}
    </p>
    <a href="#" class="btn-more">Leer más</a>
</article>`;
      $("#posts").append(post);
    });
  }
  // selector del tema
  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
    localStorage.setItem("theme", "green");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
    localStorage.setItem("theme", "blue");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
    localStorage.setItem("theme", "red");
  });

  // Hacer que persista el color escogido por el user en el localStorage
  const isThemeInLS = localStorage.getItem("theme") !== null;
  if (isThemeInLS) {
    if (localStorage.getItem("theme") == "green") {
      theme.attr("href", "css/green.css");
    }

    if (localStorage.getItem("theme") == "red") {
      theme.attr("href", "css/red.css");
    }

    if (localStorage.getItem("theme") == "blue") {
      theme.attr("href", "css/blue.css");
    }
  }

  // Scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // Login falso
  $("#login").submit(function () {
    const form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  console.log(form_name);
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><b>Bienvenido/a, " + form_name + ". 😀<b/>");
    about_parrafo.append('<br><a href="#" id="logout">Cerrar sesión</a>');

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.removeItem("form_name");
      location.reload();
    });
  }

  // Acordeon del about

  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  // Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  // Formulario de contacto
  if (window.location.href.indexOf("contact") > -1) {
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopError: true,
    });
  }
});
