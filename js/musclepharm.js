$( document ).ready(function() {

    $.ajax({
        url: "http://tonehoeft.com/json/projects.json",
        dataType: 'json'
    })
        .done(function (result) {
            projectUrl = "url('../images/project_images/" + result.projects[12].project.img_back + "')";
            document.getElementById("project-wrapper").style.backgroundImage = projectUrl;

            $(".project-left").append($("<h1 class='text-uppercase'>" + result.projects[12].project.name + "</h1> <small><p>Client: " + result.projects[12].project.client + "</p> <p>Agency: " + result.projects[12].project.agency +"</p> <p>Production Company: " + result.projects[12].project.prod_co +"</p></small> <p class='summary'>" + result.projects[12].project.summary + "</p>"));
            $(".project-right").append($("<img class='img-responsive' src='../images/project_stills/" + result.projects[12].project.media1_link + "'> <p>" + result.projects[12].project.media1_title +"</p>"));
            $(".project-right").append($("<img class='img-responsive' src='../images/project_stills/" + result.projects[12].project.media2_link + "'> <p>" + result.projects[12].project.media2_title +"</p>"));
            $(".project-right").append($("<img class='img-responsive' src='../images/project_stills/" + result.projects[12].project.media3_link + "'> <p>" + result.projects[12].project.media3_title +"</p>"));

        }).fail(function() {
            $.ajax({
                url: "http://www.tonehoeft.com/json/projects.json",
                dataType: 'json'
            })
                .done(function (result) {
                    projectUrl = "url('../images/project_images/" + result.projects[12].project.img_back + "')";
                    document.getElementById("project-wrapper").style.backgroundImage = projectUrl;

                    $(".project-left").append($("<h1 class='text-uppercase'>" + result.projects[12].project.name + "</h1> <small><p>Client: " + result.projects[12].project.client + "</p> <p>Agency: " + result.projects[12].project.agency +"</p> <p>Production Company: " + result.projects[12].project.prod_co +"</p></small> <p class='summary'>" + result.projects[12].project.summary + "</p>"));
                    $(".project-right").append($("<img class='img-responsive' src='../images/project_stills/" + result.projects[12].project.media1_link + "'> <p>" + result.projects[12].project.media1_title +"</p>"));
                    $(".project-right").append($("<img class='img-responsive' src='../images/project_stills/" + result.projects[12].project.media2_link + "'> <p>" + result.projects[12].project.media2_title +"</p>"));
                    $(".project-right").append($("<img class='img-responsive' src='../images/project_stills/" + result.projects[12].project.media3_link + "'> <p>" + result.projects[12].project.media3_title +"</p>"));

                });
        });
});