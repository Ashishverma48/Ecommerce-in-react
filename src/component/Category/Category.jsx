import { useEffect, useState  ,Fragment} from "react"
import './style.scss'
import { Listbox, Transition } from '@headlessui/react'
import Card from "../Card/card"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
export default function Category(){
    const [category,setCategory] = useState([])
    const [selected, setSelected] = useState('')
    const [item,setItem] = useState([])

    
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  function getCategory(){
    fetch('https://dummyjson.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
      setCategory(data)
    //   setSelected(data[1])
}
       )
  }
  console.log(selected);
  function getDataByCategory(url){
    fetch(url)
    .then(response=>response.json())
    .then(data=>setItem(data.products))
  }
    useEffect(()=>{
       getCategory()
       if (selected ==''){
        getDataByCategory('https://dummyjson.com/products/category/smartphones')

       }
       else{
        getDataByCategory(`https://dummyjson.com/products/category/${selected}`)
       }
    },[selected])
    console.log('ajdhjh',item);



    return (
        <div className="today">
        <div className="category">
            <h1>ToDays Best Delas For You!</h1>
        <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label> */}
          <div className=" mt-2">
            <Listbox.Button className="relative w-full  cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {/* <img src='' alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                <span className="ml-3 block truncate">{selected?selected.charAt(0).toUpperCase()+selected.slice(1):'Smartphones'}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56    overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {category?.map((person) => (
                   
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src='' alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person?.charAt(0).toUpperCase() + person.slice(1)}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  
  
        </div>
       <div className="cardItem">
       <Card deals={item}/>
       </div>
        </div>
    )
}