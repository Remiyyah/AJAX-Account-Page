 document.addEventListener("DOMContentLoaded",function(){
        const sidebarLinks = document.querySelectorAll(".sidebar-link");
        const mainContentDiv = document.getElementById("main-div");

        sidebarLinks.forEach(function(link){
            link.addEventListener("click",function (event){
                event.preventDefault();
                const linkID = this.getAttribute("id");
                let content = "";

                switch(linkID){
                    case 'newsletter-subscription':
                       content = `<div id="newsletter-form-container">
    <h2>Newsletter Subscription</h2>
    <form id="newsletter-form">
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
</div>


`;
                    break;
                    case 'settings':
                        content='<div id="settings-section">\n' +
                            '    <h2>User Settings</h2>\n' +
                            '    <form id="settings-form">\n' +
                            '        <div class="form-group">\n' +
                            '            <label for="username">Username</label>\n' +
                            '            <input type="text" class="form-control" id="username" name="username" required>\n' +
                            '        </div>\n' +
                            '        <div class="form-group">\n' +
                            '            <label for="email">Email</label>\n' +
                            '            <input type="email" class="form-control" id="email" name="email" required>\n' +
                            '        </div>\n' +
                            '        <div class="form-group">\n' +
                            '            <label for="notification">Notification Preferences</label>\n' +
                            '            <select class="form-control" id="notification" name="notification">\n' +
                            '                <option value="email">Email</option>\n' +
                            '                <option value="sms">SMS</option>\n' +
                            '                <option value="push">Push Notifications</option>\n' +
                            '            </select>\n' +
                            '        </div>\n' +
                            '        <div class="form-group">\n' +
                            '            <div class="form-check">\n' +
                            '                <input type="checkbox" class="form-check-input" id="newsletter" name="newsletter">\n' +
                            '                <label class="form-check-label" for="newsletter">Subscribe to Newsletter</label>\n' +
                            '            </div>\n' +
                            '        </div>\n' +
                            '        <button type="submit" class="btn btn-primary">Save Changes</button>\n' +
                            '    </form>\n' +
                            '</div>'
                            ;
                        break;

                         case 'liked':
                              content='<div class="coming-soon-section text-center">\n' +
                            '    <h2 class="floating " >Feature is Crafting. Coming Soon!</h2>\n' +
                            '</div>'
                          ;


                             break;

                              case 'wishlist':
                              content='<div class="coming-soon-section text-center">\n' +
                            '    <h2 class="floating " >Feature is Crafting. Coming Soon!</h2>\n' +
                            '</div>'
                            ;


                             break;
                              case 'search':
                              content='<div class="coming-soon-section text-center">\n' +
                            '    <h2 class="floating " >Feature is Crafting. Coming Soon!</h2>\n' +
                            '</div>'
                          ;


                             break;
                    default:
                        content = "Default Content"}
                mainContentDiv.innerHTML = content

            });

        });
    });