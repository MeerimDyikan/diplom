
import React, { useState } from 'react';

const RegistrationButton = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
  
    setIsRegistered(true);
  };

  return (
    <div className="col-right" id="form_box">
            <div className="desc_action">ПРИ ПОДАЧЕ ЗАЯВКИ<br/>ПРОСИМ ВАС УКАЗЫВАТЬ РЕАЛЬНЫЕ ДАННЫЕ:</div>

            <form id="regform" action="/api-new/submit" method="post"/>
<input type="hidden" name="_csrf" value="M3pZ2iuYer8VlCi3YMoKHuaSOBTJVjCw3ZpA9eYluORLERLpXP0VjSHSHugDjX0tnNkOJbE_Venv_SWRoEeKtQ=="/>
    <input type="hidden" name="action" value="sms">
<div className="form-group field-regform-user_id">

<input type="hidden" id="regform-user_id" className="form-control" name="RegForm[user_id]" value="735629661"/>

<div className="help-block"></div>
</div><div class="form-group field-regform-branch_id">

<input type="hidden" id="regform-branch_id" className="form-control" name="RegForm[branch_id]"/>

<div className="help-block"></div>
</div><div className="form-group field-regform-set_id">

<input type="hidden" id="regform-set_id" className="form-control" name="RegForm[set_id]" value=""/>

<div class="help-block"></div>
</div><div className="form-group field-regform-type">

<input type="hidden" id="regform-type" className="form-control" name="RegForm[type]" value="1"/>

<div class="help-block"></div>
</div><div className="form-group field-regform-client_id"/>

<input type="hidden" id="regform-client_id" className="form-control" name="RegForm[client_id]" value="1717577404819071975">

<div className="help-block"></div>
</div>

<div className="form-group field-regform-utm_source">

<input type="hidden" id="regform-utm_source" className="form-control" name="RegForm[utm_source]"/>

<div className="help-block"></div>
</div><div class="form-group field-regform-utm_medium">

<input type="hidden" id="regform-utm_medium" class="form-control" name="RegForm[utm_medium]"/>

<div className="help-block"></div>
</div><div class="form-group field-regform-utm_content">

<input type="hidden" id="regform-utm_content" className="form-control" name="RegForm[utm_content]"/>

<div className="help-block"></div>
</div><div class="form-group field-regform-utm_term">

<input type="hidden" id="regform-utm_term" class="form-control" name="RegForm[utm_term]">

<div class="help-block"></div>
</div>
<div class="form-group field-regform-sponsor_id required">

<input type="hidden" id="regform-sponsor_id" class="form-control" name="RegForm[sponsor_id]" value="735629661">

<div class="help-block"></div>
</div><div class="form-group field-regform-sex required">

<input type="hidden" id="regform-sex" class="form-control" name="RegForm[sex]" value="f">

<div class="help-block"></div>
</div><div class="form-group field-regform-return_url required">

<input type="hidden" id="regform-return_url" class="form-control" name="RegForm[return_url]" value="https://faberlic.com">

<div class="help-block"></div>
</div>
    <div id="step1">


                <div class="form-group field-regform-country_id required">
<label class="control-label" for="regform-country_id">Страна</label>
<select id="regform-country_id" class="form-control" name="RegForm[country_id]" aria-required="true">
<option value="">Выберите страну ...</option>
<option value="16" data-mask="+`9`94-99-999-99-99" data-iso="AZ">Azərbaycan</option>
<option value="38" data-mask=" +52-9-99-9999-999" data-iso="MX">Mexico</option>
<option value="4" data-mask="+375(99)999-99-99" data-iso="BY">Беларусь</option>
<option value="3" data-mask="+7(799)999-99-99" data-iso="KZ">Казахстан</option>
<option value="6" selected="" data-mask="+`9`96(999)999-999" data-iso="KG">Кыргызстан</option>
<option value="1" data-mask="+7(999)999-99-99" data-iso="RU">Россия</option>
<option value="10" data-mask="+`9`92-99-999-9999" data-iso="TJ">Точикистон</option>
<option value="37" data-mask="+`9`93-9-999-9999" data-iso="TM">Туркменистан</option>
<option value="26" data-mask="+`9`98(999)999-999" data-iso="UZ">Узбекистан</option>
<option value="17" data-mask="+374-99-999-999" data-iso="AM">Հայաստան</option>
<option value="9" data-mask="+`9`95(999)999-999" data-iso="GE">საქართველო</option>
</select>

<div class="help-block"></div>
</div>        <div class="form-group field-regform-surname required">
<label class="control-label" for="regform-surname">Фамилия</label>
<input type="text" id="regform-surname" class="form-control" name="RegForm[surname]" aria-required="true">

<div class="help-block"></div>
</div>        <div class="form-group field-regform-name required">
<label class="control-label" for="regform-name">Имя</label>
<input type="text" id="regform-name" class="form-control" name="RegForm[name]" autocomplete="given-name" aria-required="true">

<div class="help-block"></div>
</div>        <div class="form-group field-regform-patronymic">
<label class="control-label" for="regform-patronymic">Отчество (необязательно)</label>
<input type="text" id="regform-patronymic" class="form-control" name="RegForm[patronymic]">

<div class="help-block"></div>
</div>        <div class="form-group field-regform-birthday required">
<label class="control-label" for="regform-birthday">Дата рождения</label>
<input type="tel" id="regform-birthday" class="form-control" name="RegForm[birthday]" autocomplete="bday" aria-required="true">

<div class="help-block"></div>
</div>        <div class="form-group field-regform-email required">
<label class="control-label" for="regform-email">Электронная почта</label>
<input type="email" id="regform-email" class="form-control" name="RegForm[email]" aria-required="true">

<div class="help-block"></div>
</div>        <div class="form-group field-regform-phone required">
<label class="control-label" for="regform-phone">Мобильный телефон</label>
<input type="tel" id="regform-phone" class="form-control" name="RegForm[phone]" placeholder="+996(999)999-999" aria-required="true">

<div class="help-block"></div>
</div>
                    <div class="row">
                <div class="col-12">
                    <p>
                        На указанный номер телефона мы вышлем СМС с кодом подтверждения от Faberlic
                    </p>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-info sms-btn">Получить СМС-код</button>            </div>
        
    </div>

    <div id="step2" style="display:none">
        <h3 class="">Введите код</h3>
        <p class="">Код отправлен на телефон <br><span class="phone-check"></span></p>
        <p class="timer-wrap"><span class="timer"></span></p>
        <div class="form-group sms-wrap">
            <div class="form-group field-regform-code">

<input type="text" id="regform-code" class="text-center sms-input form-control" name="RegForm[code]" maxlength="4" placeholder="Введите сюда код из смс" inputmode="numeric" pattern="\d{4}" autocomplete="one-time-code">

<div class="help-block"></div>
</div>        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-success finish-btn" disabled="">Зарегистрироваться</button>        </div>

    </div>



</form>
    <div id="error"></div>

    <div id="overlay">
        <div class="cv-spinner">
            <span class="spinner"></span>
        </div>
    </div>

   

            <div class="desc_form">

                    <p><a target="_blank" href="https://faberlic.com/index2.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=414">Согласие на обработку персональных данных</a><br/>Нажимая кнопку «Подать заявку» Вы подтверждаете, что даете согласие на обработку своих персональных данных.                    </p>
                    <p><a target="_blank" href="https://faberlic.com/index2.php?option=com_content&amp;view=article&amp;id=2699">Регистрируясь Вы соглашаетесь с условиями соглашения.</a>.<br><br><a href="https://faberlic.com/index2.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=1039">Нажимая на кнопку «Подать заявку», я соглашаюсь с условиями Публичной оферты.</a>.
                    </p>
                            </div>
        </div>
    <div>
      {isRegistered ? (
        <p>Вы успешно зарегистрированы!</p>
      ) : (
        <button onClick={handleRegistration} className="buttonreg">
          Зарегистрироваться
        </button>
      )}
    </div>
  );
};

export default RegistrationButton;