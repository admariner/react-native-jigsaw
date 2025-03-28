import React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import DeckSwiperComponent from "react-native-deck-swiper";

export interface DeckSwiperRef {
  swipeCard: (direction: "left" | "right" | "top" | "bottom") => void;
}

export interface DeckSwiperProps<T> {
  onStartSwipe?: () => void;
  onEndSwipe?: () => void;
  onSwipe?: (index: number) => void;
  onSwipedLeft?: (index: number) => void;
  onSwipedRight?: (index: number) => void;
  onSwipedUp?: (index: number) => void;
  onSwipedDown?: (index: number) => void;
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
  startCardIndex?: number;
  infiniteSwiping?: boolean;
  verticalEnabled?: boolean;
  horizontalEnabled?: boolean;
  visibleCardCount?: number;
  data?: Array<T>;
  keyExtractor?: (item: T) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const DeckSwiper = React.forwardRef<DeckSwiperRef, DeckSwiperProps<any>>(
  <T extends object>(
    {
      onStartSwipe,
      onEndSwipe,
      onSwipe,
      onSwipedLeft,
      onSwipedRight,
      onSwipedUp,
      onSwipedDown,
      onIndexChanged,
      onEndReached,
      startCardIndex = 0,
      infiniteSwiping = false,
      verticalEnabled = true,
      horizontalEnabled = true,
      visibleCardCount = 1,
      data,
      keyExtractor,
      renderItem,
      style,
      children,
    }: React.PropsWithChildren<DeckSwiperProps<T>>,
    ref: React.Ref<DeckSwiperRef>
  ) => {
    //Both 'renderItem' and 'data' are optional to allow direct children. But if one is included, both need to be included
    if ((data && !renderItem) || (renderItem && !data)) {
      throw new Error(
        "'renderItem' and 'data' need to both be provided to lazily render. Either remove them entirley or include both"
      );
    }

    if (data && renderItem && children) {
      console.warn(
        "'children' of DeckSwiper ignored due to usage of 'data' and 'renderItem'"
      );
    }

    const deckSwiperRef = React.useRef<DeckSwiperComponent<T>>(null);

    const childrenArray = React.useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    // an array of indices based on children count
    const cardsFillerData = React.useMemo(
      () => Array.from(Array(childrenArray.length).keys()),
      [childrenArray]
    );

    const cardsData = Array.isArray(data) ? data : cardsFillerData;

    const renderCard = (card: any, index: number): JSX.Element => {
      if (renderItem) {
        return renderItem({ item: card, index });
      } else {
        return <>{childrenArray[index]}</>;
      }
    };

    const renderFirstCard = (): JSX.Element | undefined => {
      if (cardsData.length) {
        return renderCard(cardsData[0], 0);
      }
      return undefined;
    };

    const cardKeyExtractor = (card: any) => {
      if (keyExtractor) {
        return keyExtractor(card);
      } else {
        return card?.toString();
      }
    };

    /* 
  react-native-deck-swiper does not re-render cards when parent state changes
  This forces an update on every re-render to reflect any parent state changes
  */
    React.useEffect(() => {
      deckSwiperRef.current?.forceUpdate();
    });

    React.useImperativeHandle(ref, () => ({
      swipeCard: (direction: "left" | "right" | "top" | "bottom") => {
        switch (direction) {
          case "left":
            deckSwiperRef.current?.swipeLeft();
            break;
          case "right":
            deckSwiperRef.current?.swipeRight();
            break;
          case "top":
            deckSwiperRef.current?.swipeTop();
            break;
          case "bottom":
            deckSwiperRef.current?.swipeBottom();
            break;
          default:
            deckSwiperRef.current?.swipeLeft();
        }
      },
    }));

    /**
     * By default react-native-deck-swiper positions everything with absolute position.
     * To overcome this, it is wrapped in a View to be able to add the component in any layout structure.
     *
     *
     * Since all children of that View are absolutley positioned, the View does not have a height and still looks and behaves weird.
     * To fix/mitage this without setting a static height, the first card is rendered in invisible state to take up space.
     * This effectivley makes the default height of the container be the height of the first card.
     */

    return (
      <View>
        <View style={styles.containerHeightFiller}>{renderFirstCard()}</View>
        <DeckSwiperComponent
          ref={deckSwiperRef}
          cards={cardsData as any[]}
          renderCard={renderCard}
          keyExtractor={cardKeyExtractor}
          containerStyle={
            StyleSheet.flatten([styles.cardsContainer, style]) as
              | object
              | undefined
          }
          cardStyle={styles.card as object | undefined}
          onSwiped={onIndexChanged}
          onSwipedAll={onEndReached}
          cardIndex={startCardIndex}
          infinite={infiniteSwiping}
          verticalSwipe={verticalEnabled}
          horizontalSwipe={horizontalEnabled}
          showSecondCard={visibleCardCount > 1}
          stackSize={visibleCardCount}
          backgroundColor="transparent"
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          onSwipedLeft={(index) => {
            onSwipedLeft?.(index);
            onSwipe?.(index);
          }}
          onSwipedRight={(index) => {
            onSwipedRight?.(index);
            onSwipe?.(index);
          }}
          onSwipedTop={(index) => {
            onSwipedUp?.(index);
            onSwipe?.(index);
          }}
          onSwipedBottom={(index) => {
            onSwipedDown?.(index);
            onSwipe?.(index);
          }}
          //@ts-ignore Not typed, but is implemented and works
          dragStart={onStartSwipe}
          //@ts-ignore
          dragEnd={onEndSwipe}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  cardsContainer: {
    position: "absolute",
  },
  card: {
    left: 0,
    right: 0,
    width: "auto",
    height: "auto",
  },
  containerHeightFiller: {
    opacity: 0.0,
  },
});

export default DeckSwiper;
