import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {addPetFavorites} from '../services/petServices';
import useAuth from '../hooks/useAuth';

const FavButton = props => {
  const {idPet, initialState, favorites} = props;
  const [state, setState] = useState(false);
  const [favoritesArray, setFavoritesArray] = useState(favorites);
  const {authUser} = useAuth();
  console.log(idPet);

  const i = favorites.indexOf(authUser.email);

  useEffect(() => {
    (async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    })();
    if (i !== -1) {
      setState(true);
    }
  }, []);

  async function addLike() {
    favoritesArray.push(authUser.email);
    await addPetFavorites(idPet, favoritesArray);
    setState(true);
  }

  async function deleteLike() {
    console.log('Favorites antes: ', favoritesArray);
    favoritesArray.splice(i, 1);
    console.log('Favorites despues: ', favoritesArray);
    await addPetFavorites(idPet, favoritesArray);
    setState(false);
  }

  return (
    <RNBounceable onPress={state ? deleteLike : addLike}>
      <Icon
        name={state === false ? 'heart-o' : 'heart'}
        color={colors.Orange}
        size={27}
      />
    </RNBounceable>
  );
};

export default FavButton;
