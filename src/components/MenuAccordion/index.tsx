'use client';
import styles from './styles.module.scss';
import React, { useCallback, useContext, useState, ReactNode } from 'react';
import classnames from 'classnames';
import Arrow from '$/images/icons/accordionArrow.svg';

const MenuContext = React.createContext<{
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
}>({ activeGroup: undefined, switchGroup: () => {} });

const MenuAccordion = ({ children }: { children: ReactNode }) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>(undefined);

  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeTitle) =>
      activeTitle === title ? undefined : title
    );
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuAccordion.Label = function MenuItem({ title }: { title: string }) {
  return (
    <article
      className={classnames(
        styles['accordion__card'],
        styles['accordion__card_wrap_label']
      )}
    >
      <h3 className={styles['accordion__label']}>{title}</h3>
    </article>
  );
};

MenuAccordion.Question = function MenuGroup({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <article
      className={classnames(
        styles['accordion__card'],
        styles['accordion__card_wrap_question']
      )}
      onClick={() => switchGroup(question)}
    >
      <h3 className={styles['accordion__question']}>{question}</h3>

      <Arrow
        className={
          styles['accordion__arrow'] +
          (activeGroup === question
            ? ' ' + styles['accordion__arrow_active']
            : '')
        }
      />

      {activeGroup === question && (
        <span className={styles['accordion__answer']}>{answer}</span>
      )}
    </article>
  );
};

export default function CompoundComponent() {
  return (
    <div className={styles['accordion']}>
      <MenuAccordion>
        <MenuAccordion.Label title="Вопросы-ответы" />
        <MenuAccordion.Question
          question="Что такое Билетопоиск?"
          answer="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
        />
        <MenuAccordion.Question
          question="Какой компании принадлежит Билетопоиск?"
          answer="Билетопоиск - это независимый сервис, который помогает любителям кино быстро и удобно выбрать фильм и купить билеты в кинотеатры по всей России."
        />

        <MenuAccordion.Question
          question="Как купить билет на Билетопоиск?"
          answer="На Билетопоиске можно купить билеты в кино. Для этого нужно выбрать нужный фильм и сеанс, затем оплатить билеты онлайн."
        />

        <MenuAccordion.Question
          question="Как оставить отзыв на Билетопоиск?"
          answer='Чтобы поделиться своим мнением о фильме на Билетопоиске, нужно зарегистрироваться на сайте и перейти на страницу фильма. Там вы найдете раздел "Отзывы", где сможете оставить свой комментарий и поделиться впечатлениями с другими зрителями.'
        />
      </MenuAccordion>
    </div>
  );
}
