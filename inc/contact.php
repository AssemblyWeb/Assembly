<div class="container-fluid bg-blue-gr bg-header-margin">
  <div class="col-xs-12 text-center paddingTop-100 paddingBottom-40">
    <h1 class="title-text2">Contact</h1>
    <h2 class="title-text1">Mail me to kick-start your project today</h2>
  </div>
</div>
<div class="container">
  <div class="col-xs-12">
    <div class="contact-info">
      <b>Alfio Perino</b>
      <br><br>
      alfio@assembly.com
      <br>
      +00 39 327 326 3907
      <br>
      Biella, Italy
    </div>
  </div>
  <div class="col-xs-12">
    <form class="form" method="POST" action="https://formspree.io/nemesis.teufel@gmail.com">
      <div class="input-group">
        <input class="form-input form-input-width" type="text" name="name" required="required" >
        <label class="label">Your name</label>
        <img src="img/contact/icon-user.svg" class="form-icon" />
      </div>
      <div class="input-group">
        <input class="form-input form-input-width" type="email" name="_replyto"required="required" >
        <label class="label">Your e-mail</label>
        <img src="img/contact/icon-email.svg" class="form-icon" />
      </div>
      <div class="input-group">
        <input class="form-input form-input-width" type="text" name="company" >
        <label class="label">Your company</label>
        <img src="img/contact/icon-company.svg" class="form-icon" />
      </div>
      <div class="form-group marginTop-40">
        <img src="img/contact/icon-message.svg" class="textarea-icon" />
        <label class="control-label" for="niceChecks">Your message</label>
        <textarea class="form-control" rows="2" name="message"></textarea>
      </div>
      <input class="form-input form-input-hover marginTop-20" type="submit" name="send" value="Send">
      <input type="hidden" name="_next" value="Assembly/contact.php" />

    </form>

  </div>
</div>
