// import { any } from '../services/menuPersonal'

export const formatMenuOptions = (
  rawOptions: any[],
  parent: string[]
): any[] => {

  const parents = rawOptions.filter((child: any) => {
    return parent.some((id: string) => child.id_actividad == id) 
  })

  return parents.length? parents.map((data: any) => {
    const children = getChildren(rawOptions, data.id_actividad)
    if (children.length) {
        data['CHILDREN'] = children
    }

    return data
  }).sort((a,b)=> +a.id_actividad - +b.id_actividad):rawOptions
}

const getChildren = (menuOptions: any[], idActividad: string) => {
  return menuOptions.filter((menuOption: any) => {

    if (menuOption.parent === idActividad) {
      // setTimeout( function() {
        let children = getChildren(menuOptions, menuOption.id_actividad);
        if (children.length) {
          menuOption['CHILDREN'] = children
        }
    // }, 5 );
     
    }
    return menuOption.parent === idActividad
  })
}
