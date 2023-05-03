import dima from "../images/reviews/mock/dima.png";
import sveta from "../images/reviews/mock/sveta.png";
import veronika from "../images/reviews/mock/veronika.png";
import peanut_butter_coco from "../images/mock_images/image 2.png";

const mock = {
  reviws: [
    {
      id: 1,
      photo: dima,
      name: "Дмитрий",
      position: "Фитнес тренер",
      content:
        "Мои клиенты это отражение моего профессионализма. Скажем если человек занимается пол года и не получает желаемого результата, то это ставит под сомнение мою квалификацию. Питание это важнейший момент, на который стоит обращать внимание даже больше чем на\nсам тренировочный процесс, поэтому с первого же дня я рекомендую своим клиентам продукцию от Fitnessfoodfactory. Превосходные результаты моих клиентов это в том числе и заслуга друзей из Fitnessfoodfactory.",
    },
    {
      id: 2,
      photo: sveta,
      name: "Светлана",
      position: "Фитнес блогер",
      content:
        "Мне необходимо выглядеть превосходно каждый день, так как я являюсь в некотором роде образцом подражания для многих своих подписчиков. Однако фитнес блогинг это не просто красивые видео из зала - это многочасовые съёмки отнимающий много сил. Правильно питаться и оставаться в тонусе мне помогает продукция от Fitnessfoodfactory.",
    },
    {
      id: 3,
      photo: veronika,
      name: "Вероника",
      position: "Победительница конкурса\nФитнес-Бикини 2017",
      content:
        "Мне необходимо выглядеть превосходно каждый день, так как я являюсь в некотором роде образцом подражания для многих своих подписчиков. Однако фитнес блогинг это не просто красивые видео из зала - это многочасовые съёмки отнимающий много сил. Правильно питаться и оставаться в тонусе мне помогает продукция от Fitnessfoodfactory.",
    },
  ],
  productItem: {
    id: 9,
    title: "PEANUT BUTTER",
    description:
      "Натуральная арахисовая паста от Fitness Food Factory (Кокосовая)",
    img: peanut_butter_coco,
    rating: 5,
    price: 1150,
    oldPrice: 1240,
  },
};

const httpWrapper = {
  success: (data) => ({
    data,
    status: 200,
  }),
};

export const getReviews = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(httpWrapper.success(mock.reviws));
    }, 800);
  });

// export const getProductById = (id) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(httpWrapper.success(mock.productItem));
//     }, 800);
//   });
