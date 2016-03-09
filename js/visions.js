$( document ).ready(function() {

    $.ajax({
        url: "http://tonehoeft.com/json/projects.json",
        dataType: 'json'
    })
        .done(function (result) {
            projectUrl = "url('../images/project_images/" + result.projects[9].project.img_back + "')";
            document.getElementById("project-wrapper").style.backgroundImage = projectUrl;

            $(".project-left").append($("<h1 class='text-uppercase'>" + result.projects[9].project.name + "</h1> <small><p>Client: " + result.projects[9].project.client + "</p> <p>Agency: " + result.projects[9].project.agency +"</p> <p>Production Company: " + result.projects[9].project.prod_co +"</p></small> <p class='summary'>" + result.projects[9].project.summary + "</p>"));
            $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[9].project.media1_link + "'> </iframe> </div> <p>" + result.projects[9].project.media1_title +"</p>"));

        }).fail(function() {
            $.ajax({
                url: "http://www.tonehoeft.com/json/projects.json",
                dataType: 'json'
            })
                .done(function (result) {
                    projectUrl = "url('../images/project_images/" + result.projects[9].project.img_back + "')";
                    document.getElementById("project-wrapper").style.backgroundImage = projectUrl;

                    $(".project-left").append($("<h1 class='text-uppercase'>" + result.projects[9].project.name + "</h1> <small><p>Client: " + result.projects[9].project.client + "</p> <p>Agency: " + result.projects[9].project.agency +"</p> <p>Production Company: " + result.projects[9].project.prod_co +"</p></small> <p class='summary'>" + result.projects[9].project.summary + "</p>"));
                    $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[9].project.media1_link + "'> </iframe> </div> <p>" + result.projects[9].project.media1_title +"</p>"));

                });
        });
});