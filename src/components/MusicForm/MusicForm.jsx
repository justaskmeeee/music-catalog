import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddSongFetch, getRemoveCurrentSongFetch, getSaveEditedSongValuesFetch } from "store/slices/songSlice";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import { checkInputValidation } from "utils/checkInputValue";
import { v4 as uuid } from 'uuid'; 
import { currentSongSelector } from "store/selectors";
import s from './MusicForm.module.scss';

const MusicForm = ({isOpen, isCreating, isEditing, songItemValues}) => {
  const [values, setValues] = useState(songItemValues);
  const selectOptions = [
    { value: '', name: songItemValues.genre || 'Не указан'},
    { value: 'house', name: 'house' },
    { value: 'rap', name: 'rap' },
    { value: 'hip-hop', name: 'hip-hop' },
    { value: 'electronic', name: 'electronic' },
    { value: 'classic', name: 'classic' },
  ];
  const [selectedItem, setSelectedItem] = useState(selectOptions[0].value);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const currentSong = useSelector(currentSongSelector);
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    const errorsCount = Object.keys(checkInputValidation(values)).length;
    setIsValid(errorsCount === 0);
  }, [values])

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSelectedItem = (event) => {
    setSelectedItem(event.target.value);
  }
  
  const createSongItem = () => {
    dispatch(getAddSongFetch({
      title: values.title,
      album: values.album,
      artist: values.artist,
      duration: values.duration,
      genre: selectedItem,
      id: uuid(),
    }));
  }

  const handleRemoveSongItem = (event) => {
    event.preventDefault();
    dispatch(getRemoveCurrentSongFetch(currentSong.id));
    isOpen();
  }

  const handleSaveEditedSongValues = (event) => {
    event.preventDefault();
    setErrors(checkInputValidation(values));

    if (isValid) {
      dispatch(getSaveEditedSongValuesFetch({...values, genre: selectedItem}));
      isOpen();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(checkInputValidation(values));

    if (isValid) {
      createSongItem();
      setValues({
        title: '',
        album: '',
        artist: '',
        duration: '',
      })
      isOpen();
    }
  }

  return (
    <form className={s.musicForm} onSubmit={handleSubmit}>
      <Input 
        type="text"
        label="Название песни:"
        name="title"
        value={values.title}
        onChange={handleInputValue}
        error={errors.title}
        errorMessage={errors.title}
        placeholder="Укажите название"
      />
      <Input 
        type="text"
        label="Альбом:"
        name="album"
        value={values.album}
        onChange={handleInputValue}
        error={errors.album}
        errorMessage={errors.album}
        placeholder="Укажите альбом"
      />
      <Input 
        type="text"
        label="Испонитель:"
        name="artist"
        value={values.artist}
        onChange={handleInputValue}
        error={errors.artist}
        errorMessage={errors.artist}
        placeholder="Укажите исполнителя"
      />
      <Input 
        type="text"
        label="Длительность:"
        name="duration"
        value={values.duration}
        onChange={handleInputValue}
        error={errors.duration}
        errorMessage={errors.duration}
        placeholder="Укажите длительность"
      />
      <Select
        value={selectedItem}
        onChange={handleSelectedItem}
        options={selectOptions}
      />
      {isCreating &&
        <input 
          className={s.submitButton}
          type="submit" 
          value="Добавить" 
        />
      }
      {isEditing &&
        <div className={s.buttonsContainer}>
          <Button 
            className={s.removeButton}
            text="Удалить"
            onClick={handleRemoveSongItem}
          />
          <Button
            className={s.saveButton}
            text="Сохранить"
            onClick={handleSaveEditedSongValues}
          />
        </div>
      }
    </form>
  );
}

export default MusicForm;