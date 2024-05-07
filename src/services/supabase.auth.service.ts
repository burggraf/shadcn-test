import { supabase } from '$services/supabase.service';
import type { User } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
export let currentUser: any = writable<User | null>(null);
export let currentProfile: any = writable<any>(null);
const profileTable = __APP_PROFILE_TABLE__;
const profileKey = __APP_PROFILE_KEY__;

supabase.auth.onAuthStateChange(async (event, session) => {
  console.log('*** onAuthStateChange', event, session)
  currentUser.set(session?.user ?? null);
});  

export let currentUserId = '';
currentUser.subscribe((value: any) => {
  if (value?.id) {
    if (profileTable) {
      loadProfile(value?.id);
    }
    currentUserId = value?.id;
  } else {
    currentProfile.set(null);
    currentUserId = '';
  }
})

export const loadProfile = async (id: string) => {
  // console.log('*** loadProfile', id, profileTable, profileKey)
  if (!profileTable || !profileKey) return;
  const { data, error } = 
  await supabase.from(profileTable)
  .select('*')
  .eq(profileKey, id)
  .limit(1);
  if (data && data.length > 0) {
    currentProfile.set(data[0]);
    return data[0];
  } else if (error) {
    console.error('loadProfile error', error);
    currentProfile.set({name: '', bio: '', settings: {}});
    return {name: '', bio: '', settings: {}};
  } else {
    currentProfile.set({name: '', bio: '', settings: {}});
    return {name: '', bio: '', settings: {}};
  }
}
export const loadUser = async () => {
  // get all keys from localStorage
  const keys = Object.keys(localStorage);
  // filter keys to get only supabase.auth.token
  const supabaseToken = keys.filter(key => key.endsWith('-auth-token'));
  if (supabaseToken.length > 0) {
    const { data, error } = await supabase.auth.getUser();
  }
};
loadUser();

// save settings with user in auth.users table
export const saveSettings = async (settings: any) => {
  const { data, error } = await supabase.auth.updateUser({
    data: settings
  })    
  return { data, error };
}

/************************************/
export const signUpWithEmail = async (email: string, password: string) => {
    // first try logging in... sometimes the user already exists
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email, password
    });
    if (signInData.user) {
      return { user: signInData.user, session: signInData.session, error: signInError };
    } 
    // this still doesn't cover if they already exist but entered the wrong password

    // if the user doesn't exist, create a new user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin // .origin
      }
    });
    return { user: data.user, session: data.session, error };
  }
  
  export const sendMagicLink = async (email: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: window.location.origin
      }
    });
    return { user: data.user, session: data.session, error };
  }
  
  export const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return { user: data.user, session: data.session, error };
  }

  export const resetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email,
      {
        redirectTo: window.location.origin + '?'
      });
    return { data, error };
  }
  
  export const updatePassword = async (new_password: string) => {
    const { error, data } = await supabase.auth.updateUser({ password: new_password });
    return { error, data };
  }
