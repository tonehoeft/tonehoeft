$( document ).ready(function() {

    $.ajax({
        url: "http://tonehoeft.com/json/projects.json",
        dataType: 'json'
    })
        .done(function (result) {
            projectUrl = "url('../images/project_images/" + result.projects[11].project.img_back + "')";
            document.getElementById("project-wrapper").style.backgroundImage = projectUrl;

            $(".project-left").append($("<h1 class='text-uppercase'>" + result.projects[11].project.name + "</h1> <small><p>Client: " + result.projects[11].project.client + "</p> <p>Agency: " + result.projects[11].project.agency +"</p> <p>Production Company: " + result.projects[11].project.prod_co +"</p></small> <p class='summary'>" + result.projects[11].project.summary + "</p>"));
            $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[11].project.media1_link + "'> </iframe> </div> <p>" + result.projects[11].project.media1_title +"</p>"));
            $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[11].project.media2_link + "'> </iframe> </div> <p>" + result.projects[11].project.media2_title +"</p>"));
            $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[11].project.media3_link + "'> </iframe> </div> <p>" + result.projects[11].project.media3_title +"</p>"));

        }).fail(function() {
            $.ajax({
                url: "http://www.tonehoeft.com/json/projects.json",
                dataType: 'json'
            })
                .done(function (result) {
                    projectUrl = "url('../images/project_images/" + result.projects[11].project.img_back + "')";
                    document.getElementById("project-wrapper").style.backgroundImage = projectUrl;

                    $(".project-left").append($("<h1 class='text-uppercase'>" + result.projects[11].project.name + "</h1> <small><p>Client: " + result.projects[11].project.client + "</p> <p>Agency: " + result.projects[11].project.agency +"</p> <p>Production Company: " + result.projects[11].project.prod_co +"</p></small> <p class='summary'>" + result.projects[11].project.summary + "</p>"));
                    $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[11].project.media1_link + "'> </iframe> </div> <p>" + result.projects[11].project.media1_title +"</p>"));
                    $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[11].project.media2_link + "'> </iframe> </div> <p>" + result.projects[11].project.media2_title +"</p>"));
                    $(".project-right").append($("<div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='" + result.projects[11].project.media3_link + "'> </iframe> </div> <p>" + result.projects[11].project.media3_title +"</p>"));

                });
        });
});