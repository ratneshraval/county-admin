# frozen_string_literal: true

require 'rails_helper'

module Api
  describe UserListController do
    describe '#index' do
      let(:user_repository) { instance_double('User::UserRepository') }
      let(:user) { Users::User.new(username: 'el') }

      it 'has a route' do
        expect(get: 'api/user_list').to route_to(
          controller: 'api/user_list',
          action: 'index',
          format: 'json'
        )
      end

      it 'returns a userlist' do
        allow(Users::UserRepository).to receive(:new)
          .with(no_args).and_return(user_repository)
        allow(user_repository).to receive(:get_users).with('token').and_return(user)
        request.session[:token] = 'token'
        get :index
        expect(response.body).to eq user.to_json
      end
    end
  end
end
