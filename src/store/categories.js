const initialState = {
    category: [
      {displayName: 'Staffordshire Terrier', name: 'staffordshire terrier', description: 'AmStaffs are stocky, muscular bull-type terriers standing 17 to 19 inches at the shoulder. The head is broad, the jaws well defined, the cheekbones pronounced, and the dark, round eyes are set wide apart. AmStaff movement is agile and graceful, with a springy gait that advertises the breed’s innate confidence. The stiff, glossy coat comes in many colors and patterns. AmStaffers describe their dogs as keenly aware of their surroundings, game for anything, and lovable “personality dogs” around the house. AmStaffs like mental and physical challenges. They are highly trainable, as their many forays into showbiz suggest. When acquiring an AmStaff, there’s only one way to go: Do your homework and find a responsible AKC breeder.'},
       {displayName: 'German Shepherd', name: 'german shepherd', description: 'German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds.There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there’s a “certain aloofness that does not lend itself to immediate and indiscriminate friendships.”'}
       ,
       {displayName: 'Border Collie', name: 'border collie', description: 'Borders are athletic, medium-sized herders standing 18 to 22 inches at the shoulder. The overall look is that of a muscular but nimble worker unspoiled by passing fads. Both the rough coat and the smooth coat come in a variety of colors and patterns.The almond eyes are the focus of an intelligent expression—an intense gaze, the Border’s famous “herding eye”, is a breed hallmark. On the move, Borders are among the canine kingdom’s most agile, balanced, and durable citizens.The intelligence, athleticism, and trainability of Borders have a perfect outlet in agility training. Having a job to perform, like agility—or herding or obedience work—is key to Border happiness. Amiable among friends, they may be reserved with strangers.'}
      ],
    active: ''
  }
  
  export const selectCategory = (stuff) => {
    return {
      type: 'Categories',
      payload: stuff
    }
  }
  
  
  // What should be done to our initial state?
  const categoryReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch(type){
      case 'Categories':
       return {...state, active : payload}
       default:
         return state;
    }
  
    // this returns the new state.
  }
  
  export default categoryReducer;