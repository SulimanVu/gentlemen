import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

type IUseSignOut = () => void;

export function useSignOut(): IUseSignOut {
  const queryClient = useQueryClient();
  const Navigate = useNavigate()

  const onSignOut = useCallback(() => {
    queryClient.setQueryData(['user'], null);
    localStorage.removeItem('token');
    Navigate('/signIn')
    
  }, [queryClient]);

  return onSignOut;
}
