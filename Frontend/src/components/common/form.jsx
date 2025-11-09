import React from 'react'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

function CommomForm({formControls, formData, setFormData, onSubmit, buttonText}) {


  function renderInputsByComponentType(getControlItem){
    let element = null;
    const value = formData[getControlItem.name] || ''


    switch (getControlItem.componentType) {
      case "input":
        element = (
        <Input
        name = {getControlItem.name}
        palceholder = {getControlItem.palceholder}
        id = {getControlItem.name}
        type = {getControlItem.type}
        value = {value}
        onChange={(event) => setFormData({
          ...formData,
          [getControlItem.name] : event.target.value,
        })}
        />
      );
        
      break;

      case "select":
        element = (
        <select onValueChange={(value) => setFormData({
          ...formData,
          [getControlItem.name] : value
        })} value={value}>
          <SelectTrigger className='w-full'>
            <SelectValue palceholder = {getControlItem.palceholder}/>
          </SelectTrigger>
          <SelectContent>
            {
              getControlItem.options &&
              getControlItem.options.length > 0 ?
              getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
            }
          </SelectContent>
        </select>
      );
        
      break;

      case "textarea":
        element = (
        <textarea
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.id}
        value={value}
        onChange={(event) => setFormData({
          ...formData,
          [getControlItem.name] : event.target.value,
        })}
        />
      );
        
      break;

      default:
        element = (
        <Input
        name = {getControlItem.name}
        palceholder = {getControlItem.palceholder}
        id = {getControlItem.name}
        type = {getControlItem.type}
        onChange={(event) => setFormData({
          ...formData,
          [getControlItem.name] : event.target.value,
        })}
        />
      );
        
      break;

    }
  }


  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3'>
        {
          formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
            <label className='mb-1'>{controlItem.label}</label>
            {
              renderInputsByComponentType(controlItem)
            }

          </div>)
        }

      </div>
      <button type='submit' className='mt-2 w-full'>{buttonText || 'Submit'}</button>
    </form>
  )
}

export default CommomForm