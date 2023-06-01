<template>
  <div class="about-company-info-text other-text-style">
    <p>Создание коттеджных поселков – основное направление нашей работы.</p>
    <p> Мы:
    </p>
      <p>•облагораживаем и обустраиваем территорию;</p>
      <p>•проводим коммуникации и создаем инфраструктуру для жизни;</p>
      <p>•обеспечиваем сохранность благоустройства и атмосферы в каждом поселке.</p>


    <p>
      Мы работаем для того, чтобы вам не пришлось ни о чем думать.
    </p>
    <p>
      Проводим оптоволокно,
      кладем асфальт и создаем условия для транспортного обеспечения,
      обустраиваем общественные зоны и места для отдыха, делаем детские
      и спортивные площадки – остается только заселиться и получать
      удовольствие от жизни в окружении живописной природы.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutTitle',

}
</script>

<style scoped>

.about-company-info-text {
  font-size: 30px;
  padding: 16px;
  text-indent: 32px;
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 1600px) {
  .about-company-info-text {
    font-size: 22px;
  }

}

@media (max-width: 768px) {
  .about-company-info-text {
    font-size: 18px;
    width: 100%;
  }
}

</style>
