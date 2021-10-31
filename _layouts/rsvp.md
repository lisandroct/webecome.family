{% capture page-name %}{{ page.name | remove:'.md' }}{% endcapture %}
{% assign pagename = page.name %}

<!DOCTYPE html>
<html>
    {% include head.html %}
    <body>
        {% include side-menu.html %}
        <div class="rsvp-content content-container">
            <section id="content">
                <div class="frame">
                    <form class="pure-form pure-form-stacked" action="javascript:submit()">
                        {% for guest in page.guests %}
                            {% assign name = guest.name %}
                            {% assign id = guest.id %}
                            <section id="{{ id }}" class="guest">
                            <legend>{{ name }}</legend>
                                <div class="pure-g">
                                    <div class="pure-u-1 pure-u-sm-1-2">
                                        <h2>Argentina</h2>
                                        <label for="{{ id }}-argentina-yes" class="pure-radio">
                                            <input type="radio" id="{{ id }}-argentina-yes" name="{{ id }}-argentina" value="yes" required/> Wouldn't miss it.
                                        </label>
                                        <label for="{{ id }}-argentina-no" class="pure-radio">
                                            <input type="radio" id="{{ id }}-argentina-no" name="{{ id }}-argentina" value="no" required/> I will be toasting from afar.
                                        </label>
                                    </div>
                                    <div class="pure-u-1 pure-u-sm-1-2">
                                        <h2>Las Vegas</h2>
                                        <label for="{{ id }}-vegas-yes" class="pure-radio">
                                            <input type="radio" id="{{ id }}-vegas-yes" name="{{ id }}-vegas" value="yes" required/> Wouldn't miss it.
                                        </label>
                                        <label for="{{ id }}-vegas-no" class="pure-radio">
                                            <input type="radio" id="{{ id }}-vegas-no" name="{{ id }}-vegas" value="no" required/> I will be toasting from afar.
                                        </label>
                                    </div>
                                </div>
                                <div class="pure-g">
                                    <h2>Dietary Restrictions</h2>
                                    <input type="text" name="{{ id }}-dietary-restrictions" class="pure-u-1 textfield" placeholder="None" />
                                </div>
                            </section>
                        {% endfor %}
                        <hr>
                        <div class="pure-g">
                            <h2>E-Mail</h2>
                            <input type="email" name="email" class="pure-u-1 textfield" required/>
                        </div>
                        <br \>
                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </form>
                </section>
                {% include footer.html %}
            </div>
        </div>
        {% include scripts.html %}
        <script>
            function submit() {
                const myObject = { guests: [] };
                const elements = document.querySelector('form').elements;
                const guests = document.getElementsByClassName("guest");
                for(var i = 0, n = guests.length; i < n; i++) {
                    const guest = guests[i];
                    const id = guest.id;
                    const argentina = elements[`${id}-argentina`].value == "yes";
                    const vegas = elements[`${id}-vegas`].value == "yes";
                    const restrictions = elements[`${id}-dietary-restrictions`].value;
                    myObject.guests[i] = { id: id, argentina: argentina, vegas: vegas, restrictions: restrictions };
                }
                myObject.email = elements["email"].value;
                const json = JSON.stringify(myObject);
                console.log(json);
                var url = "https://hooks.airtable.com/workflows/v1/genericWebhook/apphPSOY1efULnNYL/wflQZ8K0NKrOA38m8/wtryhIEEnifAYTqOt";
                var xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }};
                var data = json;
                xhr.send(data);
            }
        </script>
    </body>
</html>