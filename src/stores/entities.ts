import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Option } from '@/types/Option';
import type { Entity } from '@/types/Entity';
import type { AuthResponse } from '@/types/AuthResponse';
import type { PostRequest } from '@/types/PostRequest';
import { addEntity, getAPIToken } from '@/api/CRMApi';
import type { PostResponse } from '@/types/PostResponse';

export const useEntitiesStore = defineStore('entity', () => {
  const entities = ref(<Entity[]>([]));

  const authResponse = ref(<AuthResponse>({}));

  const selectedOption = ref(<Option>({}));

  const postResponse = ref(<PostResponse>({}));

  const authenticate = async () => {
    authResponse.value = await getAPIToken();
  };

  const createEntity = async () => {
    postResponse.value = await addEntity(authResponse.value.access_token, 
      authResponse.value.base_domain,
      selectedOption.value.routing);
    const newEntity = <Entity>({id: postResponse.value._embedded[selectedOption.value.routing][0].id, name: selectedOption.value.description});
    entities.value.push(newEntity);
  }

  const postRequest = ref(<PostRequest>({}));

  const options = <Option[]>([ 
  {id: 0, description: 'Сделка', routing: 'leads'}, 
  {id: 1, description: 'Контакт', routing: 'contacts'}, 
  {id: 2, description: 'Компания', routing: 'companies'},
  ]);

  const isDisabled = computed(() => {
    if (selectedOption.value.description === undefined) return true;
    return false;  
  });

  return { 
    options,
    entities, 
    isDisabled,
    postRequest,
    authResponse,
    postResponse,
    authenticate,
    createEntity,
    selectedOption,
   }
})
