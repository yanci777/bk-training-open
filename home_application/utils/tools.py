from django.core.paginator import Paginator

from home_application.models import Group, GroupUser


def check_param(params, kwargs: dict):
    """校验不可为空的参数"""
    for key in params:
        if key not in kwargs or not kwargs[key]:
            return False, u"缺少{}".format(params.get(key))
    return True, None


def get_paginator(objects, page, size):
    """生成分页器"""
    p = Paginator(objects, size)
    try:
        return p.page(page)
    except Exception:
        return p.page(1)


def apply_info_to_json(apply_info):
    """将申请入组信息进行json转化"""
    return {
        "user_id": apply_info.id,
        "username": apply_info.username,
        "name": apply_info.name,
        "apply_date": apply_info.update_time.strftime("%Y-%m-%d %H:%M:%S"),
    }


def check_user_is_admin(request):
    """判断用户是否在所有组皆为管理员，返回值为True时不需要写日报，为False时需要写日报"""
    group_ids = GroupUser.objects.filter(user_id=request.user.id).values_list("group_id", flat=True)
    user_name = request.user.username
    groups = Group.objects.filter(id__in=group_ids)
    for g in groups:
        if user_name not in g.admin_list:
            return False
    return True
