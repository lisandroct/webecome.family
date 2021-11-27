{% assign i18n = site.data[page.lang] %}

<!DOCTYPE html>
<html>
    {% include head.html %}
    <body>
        {% include side-menu.html %}
        <div class="rsvp-content content-container">
            <section id="content">
                <h1>The Crespo Wedding is <span id="title-span">Hughes</span>!</h1>
                <h2>{{ i18n.form_title }}</h2>
                <div class="frame">
                    <form class="pure-form pure-form-stacked" action="javascript:submit()">
                        {% for guest in page.guests %}
                            {% assign name = guest.name %}
                            {% assign id = guest.id %}
                            <section id="{{ id }}" class="guest">
                            <legend>{{ name }}</legend>
                                <div class="pure-g">
                                    <div class="pure-u-1 pure-u-sm-1-2">
                                        <h3>Argentina</h3>
                                        <label for="{{ id }}-argentina-yes" class="pure-radio">
                                            <input type="radio" id="{{ id }}-argentina-yes" name="{{ id }}-argentina" value="yes" required/> {{ i18n.form_yes }}
                                        </label>
                                        <label for="{{ id }}-argentina-no" class="pure-radio">
                                            <input type="radio" id="{{ id }}-argentina-no" name="{{ id }}-argentina" value="no" required/> {{ i18n.form_no }}
                                        </label>
                                    </div>
                                    <div class="pure-u-1 pure-u-sm-1-2">
                                        <h3>Indiana</h3>
                                        <label for="{{ id }}-vegas-yes" class="pure-radio">
                                            <input type="radio" id="{{ id }}-vegas-yes" name="{{ id }}-vegas" value="yes" required/> {{ i18n.form_yes }}
                                        </label>
                                        <label for="{{ id }}-vegas-no" class="pure-radio">
                                            <input type="radio" id="{{ id }}-vegas-no" name="{{ id }}-vegas" value="no" required/> {{ i18n.form_no }}
                                        </label>
                                    </div>
                                </div>
                                <div class="pure-g">
                                    <h3>{{ i18n.dietary_restrictions }}</h3>
                                    <input type="text" name="{{ id }}-dietary-restrictions" class="pure-u-1 textfield" placeholder="{{ i18n.none }}" />
                                </div>
                            </section>
                        {% endfor %}
                        <hr>
                        <div class="pure-g" style="margin-bottom: 1.5em">
                            <h3>E-Mail</h3>
                            <input type="email" name="email" class="pure-u-1 textfield" required/>
                        </div>
                        <p class="success hidden" id="success">{{ i18n.form_success }}</p>
                        <p class="error hidden" id="error">{{ i18n.form_error }}</p>
                        <div class="pure-g">
                            <button type="submit" class="pure-button pure-button-primary">{{ i18n.submit }}</button>
                        </div>
                    </form>
                </section>
                {% include footer.html %}
            </div>
        </div>
        {% include scripts.html %}
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script>
            function submit() {
                var myObject = { guests: [] };
                var elements = document.querySelector('form').elements;
                var guests = document.getElementsByClassName("guest");
                var success = document.getElementById("success");
                var error = document.getElementById("error");
                var button = document.querySelector('button');
                for(var i = 0, n = guests.length; i < n; i++) {
                    var guest = guests[i];
                    var id = guest.id;
                    var argentina = elements[`${id}-argentina`].value == "yes";
                    var vegas = elements[`${id}-vegas`].value == "yes";
                    var restrictions = elements[`${id}-dietary-restrictions`].value;
                    myObject.guests[i] = { id: id, argentina: argentina, vegas: vegas, restrictions: restrictions };
                }
                myObject.email = elements["email"].value;
                var json = JSON.stringify(myObject);
                var request = new XMLHttpRequest();
                {% if page.lang == "es" %}
                var url = "https://hooks.zapier.com/hooks/catch/11287392/bd5k4f4";
                {% else %}
                var url = "https://hooks.zapier.com/hooks/catch/11372495/bm2u7mj";
                {% endif %}
                request.open("POST", url);
                request.onreadystatechange = function () {
                    if (request.readyState === 4 && request.status == 200) {
                        success.classList.remove("hidden");
                        error.classList.add("hidden");
                        button.disabled = true;
                        setTimeout(function(){
                            button.disabled = false;
                        },5000);
                    } else {
                        success.classList.add("hidden");
                        error.classList.remove("hidden");
                    }
                };
                request.send(json);
            }
        </script>
    </body>
</html>
