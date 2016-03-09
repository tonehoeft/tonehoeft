$( document ).ready(function() {
	$('.carousel').carousel();

	$.ajax({
        url: "http://tonehoeft.com/json/projects.json",
        dataType: 'json'
    })
        .done(function (result) {

        	project0 = result.projects[Math.floor(Math.random() * result.projects.length)];
        	project0Url = "url(&#39images/project_images/" + project0.project.img_jumbo + "&#39)";

        	project1 = result.projects[Math.floor(Math.random() * result.projects.length)];

        	do {
            project1 = result.projects[Math.floor(Math.random() * result.projects.length)];
        	} while (project0 === project1);

        	project1Url = "url(&#39images/project_images/" + project1.project.img_jumbo + "&#39)";

        	project2 = result.projects[Math.floor(Math.random() * result.projects.length)];

        	do {
            project2 = result.projects[Math.floor(Math.random() * result.projects.length)];
        	} while (project1 === project2 || project2 === project0);

        	project2Url = "url(&#39images/project_images/" + project2.project.img_jumbo + "&#39)";

        	$(".caro-0").empty();
        	$(".caro-1").empty();
        	$(".caro-2").empty();

        	$(".caro-0").append($("<a href='pages" + project0.project.url + ".html'> <div class='fill' style='background-image:" + project0Url + ";'></div> <div class='carousel-caption'> <h1 class='text-uppercase'>" + project0.project.name + "</h1> <p>" + project0.project.descrip_long + "</p> </div> </a>"));
        	$(".caro-1").append($("<a href='pages" + project1.project.url + ".html'> <div class='fill' style='background-image:" + project1Url + ";'></div> <div class='carousel-caption'> <h1 class='text-uppercase'>" + project1.project.name + "</h1> <p>" + project1.project.descrip_long + "</p> </div> </a> "));
        	$(".caro-2").append($("<a href='pages" + project2.project.url + ".html'> <div class='fill' style='background-image:" + project2Url + ";'></div> <div class='carousel-caption'> <h1 class='text-uppercase'>" + project2.project.name + "</h1> <p>" + project2.project.descrip_long + "</p> </div> </a>"));


            $(".project-list").empty();

            for (i = result.projects.length - 1; i > -1; i--) {
                projectUrl = "url(&#39images/project_images/" + result.projects[i].project.img_banner + "&#39)";
                $(".project-list").append($("<a href='pages" + result.projects[i].project.url + ".html'> <div class='row project-row fill' style='background-image:" + projectUrl + ";'> <div class='col-xs-10 col-xs-offset-1 vcenter'> <h2 class='text-uppercase text-center'>" + result.projects[i].project.name + "</h2> <p class='text-center'>" + result.projects[i].project.descrip_short + "<br />Client: " + result.projects[i].project.client + "</p> </div> </div> </a>"));
            }

        }).fail(function() {
            $.ajax({
                url: "http://www.tonehoeft.com/json/projects.json",
                dataType: 'json'
            })
                .done(function (result) {
                    project0 = result.projects[Math.floor(Math.random() * result.projects.length)];
                    project0Url = "url(&#39images/project_images/" + project0.project.img_jumbo + "&#39)";

                    project1 = result.projects[Math.floor(Math.random() * result.projects.length)];

                    do {
                    project1 = result.projects[Math.floor(Math.random() * result.projects.length)];
                    } while (project0 === project1);

                    project1Url = "url(&#39images/project_images/" + project1.project.img_jumbo + "&#39)";

                    project2 = result.projects[Math.floor(Math.random() * result.projects.length)];

                    do {
                    project2 = result.projects[Math.floor(Math.random() * result.projects.length)];
                    } while (project1 === project2 || project2 === project0);

                    project2Url = "url(&#39images/project_images/" + project2.project.img_jumbo + "&#39)";

                    $(".caro-0").empty();
                    $(".caro-1").empty();
                    $(".caro-2").empty();

                    $(".caro-0").append($("<a href='pages" + project0.project.url + ".html'> <div class='fill' style='background-image:" + project0Url + ";'></div> <div class='carousel-caption'> <h1 class='text-uppercase'>" + project0.project.name + "</h1> <p>" + project0.project.descrip_long + "</p> </div> </a>"));
                    $(".caro-1").append($("<a href='pages" + project1.project.url + ".html'> <div class='fill' style='background-image:" + project1Url + ";'></div> <div class='carousel-caption'> <h1 class='text-uppercase'>" + project1.project.name + "</h1> <p>" + project1.project.descrip_long + "</p> </div> </a> "));
                    $(".caro-2").append($("<a href='pages" + project2.project.url + ".html'> <div class='fill' style='background-image:" + project2Url + ";'></div> <div class='carousel-caption'> <h1 class='text-uppercase'>" + project2.project.name + "</h1> <p>" + project2.project.descrip_long + "</p> </div> </a>"));


                    $(".project-list").empty();

                    for (i = result.projects.length - 1; i > -1; i--) {
                        projectUrl = "url(&#39images/project_images/" + result.projects[i].project.img_banner + "&#39)";
                        $(".project-list").append($("<a href='pages" + result.projects[i].project.url + ".html'> <div class='row project-row fill' style='background-image:" + projectUrl + ";'> <div class='col-xs-10 col-xs-offset-1 vcenter'> <h2 class='text-uppercase text-center'>" + result.projects[i].project.name + "</h2> <p class='text-center'>" + result.projects[i].project.descrip_short + "<br />Client: " + result.projects[i].project.client + "</p> </div> </div> </a>"));
                    }

                });
        });
});