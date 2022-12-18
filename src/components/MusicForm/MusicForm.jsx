import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "store/slices/songSlice";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { checkInputValidation } from "utils/checkInputValue";
import Button from "../UI/Button";
import s from './MusicForm.module.scss';

const MusicForm = ({isOpen}) => {
  const [values, setValues] = useState({
    title: '',
    album: '', 
    artist: '',
    duration: '',
  });
  const selectOptions = [
    { value: 'house', name: 'house' },
    { value: 'rap', name: 'rap' },
    { value: 'hip-hop', name: 'hip-hop' },
    { value: 'electronic', name: 'electronic' },
    { value: 'classic', name: 'classic' },
  ];
  const [selectedItem, setSelectedItem] = useState('');
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
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

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  }
  
  const createSongItem = () => {
    dispatch(addSong({
      title: values.title,
      album: values.album,
      artist: values.artist,
      duration: values.duration || 'Не указано',
      genre: selectedItem || 'Не указано',
    }));
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
    <form className={s.musicForm}>
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
        defaultValue="Выберите жанр" 
        value={selectedItem}
        onChange={handleSelectedItem}
        options={selectOptions}
      />
      <Button 
        className={s.addButton}
        text="Добавить"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default MusicForm;