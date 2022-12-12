export const checkInputValidation = (values) => {
  // Любые буквы, цифры, символы 3-15 
  const textPattern = /^[\p{Alpha}\p{Nd}\p{S}\s*]{3,15}$/iu;
  const durationPattern = /^[0-5]?\d:[0-5]\d$/iu;
  const duration = values.duration;
  const errors = {};
  

  for (let key in values) {
    const inputValue = values[key];

    if (key !== 'duration') {
      if (!inputValue.trim()) {
        errors[key] = 'Пожалуйста, заполните данное поле';
      } else if (!textPattern.test(inputValue)) {
        errors[key] = 'Данное поле, должно содержать от 3 до 15 символов';
      } 
    }
  }

  if (values.hasOwnProperty('duration')) {
    if (!duration.trim()) {
      delete errors[duration]
    } else if (!durationPattern.test(duration)) {
      errors.duration = 'Пожалуйста, укажите длительность песни в формате mm:ss';
    }
  }
    
  return errors;
}